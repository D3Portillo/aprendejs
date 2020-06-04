const fetch = require("node-fetch")
const { TOKEN = false } = process.env
const BASE_URL = `https://api.airtable.com/v0/appU8sXkXLRsB7KVe/AprendeJS%20-%20Certificados`
const NOT_FOUND_URL = `https://aprendejs.email/certificados/not/found`
const embedPDF = ({ name = "Sín nombre", pdfURL, image, url }) => {
  const title = `AprendeJS | ${name} ~ Completado`
  const description = `Felicidades haz completado el curso en https://aprendejs.email`
  const metas = [
    {
      name: "author",
      content: title,
    },
    {
      name: "keywords",
      content: "fenixapp,gofenix,app_fenix,fenix_app,gym",
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
      content: "gofenix.app",
    },
  ]
    .map(({ name, content }) => {
      return `<meta name="${name}" content="${content}"/>`
    })
    .join("\n")

  return `<!DOCTYPE html><html><head><title>${title}</title>${metas}<style>body,html {margin: 0;padding: 0;height: 100%;overflow: hidden;}</style></head><body><iframe  width="100%" height="100%" src="${pdfURL}"/></body></html>
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
      .then(({ fields, name }) => {
        if (Array.isArray(fields.cert)) {
          const pdf = fields.cert[0]
          callback(null, {
            statusCode: 200,
            headers: {
              "Content-type": "text/html",
            },
            body: embedPDF({
              name,
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
