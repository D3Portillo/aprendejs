const fetch = require("node-fetch")
const { TOKEN = false } = process.env
const BASE_URL = `https://api.airtable.com/v0/appU8sXkXLRsB7KVe/AprendeJS%20-%20Certificados`
const NOT_FOUND_URL = `https://aprendejs.email/certificados/not/found`
const embedPDF = ({ name = "Sín nombre", pdfURL, image, url }) => {
  const title = `AprendeJS | ${name} ~ Curso completado`
  const description = `${name} ha completado con éxito el curso de 20 capítulos #AprendeJS, via: https://aprendejs.email`
  const metas = [
    {
      name: "author",
      content: "AprendeJS",
    },
    {
      name: "keywords",
      content: "javascript,aprendejs,coding",
    },
    {
      name: "description",
      content: description,
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
      name: "twitter:card",
      content: description,
    },
    {
      name: "og:site_name",
      content: title,
    },
    {
      name: "twitter:image:alt",
      content: "https://aprendejs.email",
    },
  ]
    .map(({ name, content }) => {
      return `<meta name="${name}" content="${content}"/>`
    })
    .join("\n")

  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${title}</title>${metas}<style>body,html {margin: 0;padding: 0;height: 100%;overflow: hidden;}</style></head><body><iframe  width="100%" height="100%" src="${pdfURL}"/></body></html>
  `
}
exports.handler = (event, context, callback) => {
  console.log({ event, context })
  const voidData = () => {
    callback(null, {
      statusCode: 302,
      headers: {
        Location: NOT_FOUND_URL,
      },
    })
  }
  if (TOKEN) {
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
      .catch(voidData)
  } else voidData()
}

exports.handler({ path: "algo/recu4u9BkgQaymT5J" }, null, console.log)
