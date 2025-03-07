const fetch = require("node-fetch")
const { TOKEN = "" } = process.env
const BASE_URL = `https://api.airtable.com/v0/appU8sXkXLRsB7KVe/AprendeJS%20-%20Certificados`
const NOT_FOUND_URL = `https://aprendejs.email/certificados/not/found`
const getMetas = ({
  title = `AprendeJS`,
  description = `Aprendé Javascript desde tu email con un contenido previamente preparado y curado, además al completar recibirás un certificado válido por lo aprendido.`,
  image = "/seo.jpg",
  url = "https://aprendejs.email",
}) => {
  const TWITTER_USER = `AprendeJS`
  if (!image.startsWith("http")) {
    image = `https://${`aprendejs.email/${image}`.replace(/\/+/g, "/")}`
  }
  return [
    {
      name: "author",
      content: TWITTER_USER,
    },
    {
      name: "keywords",
      content: "javascript,aprendejs,coding,newsletter",
    },
    {
      name: "description",
      content: description,
    },
    {
      name: "og:type",
      content: "article",
    },
    {
      name: "og:title",
      content: title,
    },
    {
      name: "og:description",
      content: description,
    },
    {
      name: "og:image",
      content: image,
    },
    {
      name: "og:url",
      content: url,
    },
    {
      name: "og:site_name",
      content: title,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:image",
      content: image,
    },
    {
      name: "twitter:site",
      content: TWITTER_USER,
    },
    {
      name: "twitter:creator",
      content: TWITTER_USER,
    },
    {
      name: "twitter:image:alt",
      content: url,
    },
  ]
}
module.exports = {
  handler: (event, context, callback) => {
    const embedPDF = ({ name = "Sín nombre", pdfURL, image, url }) => {
      const title = `AprendeJS | ${name} ~ Curso completado`
      const description = `${name} ha completado con éxito el curso de 20 capítulos #AprendeJS, via: https://aprendejs.email`
      const metas = getMetas({ title, description, image, url })
        .map(({ name, content }) => {
          return `<meta name="${name}" content="${content}"/>`
        })
        .join("\n")

      return `<!DOCTYPE html><html>
      <head><meta charset="UTF-8"><link rel="icon" type="image/png" href="https://aprendejs.email/favicon.png"/><title>${title}</title>${metas}<style>body,html {margin: 0;padding: 0;height: 100%;overflow: hidden;}</style></head>
      <body><iframe  width="100%" height="100%" src="${pdfURL}"/></body>
      </html>
      `
    }
    const voidData = () => {
      callback(null, {
        statusCode: 302,
        headers: {
          Location: NOT_FOUND_URL,
        },
      })
    }
    const id = event.path.split("/").pop()
    const URL = `${BASE_URL}/${id}`
    console.log(URL)
    fetch(URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((r) => r.json())
      .then(({ fields }) => {
        console.log({ fields })
        if (Array.isArray(fields.cert)) {
          const pdf = fields.cert[0]
          callback(null, {
            statusCode: 200,
            headers: {
              "Content-type": "text/html",
            },
            body: embedPDF({
              name: fields.name,
              pdfURL: pdf.url,
              image: pdf.thumbnails.large.url,
              url: `https://aprendejs.email/certificados/${id}`,
            }),
          })
        } else voidData()
      })
      .catch((error) => {
        console.log({ error })
        voidData()
      })
  },
  getMetas,
}
