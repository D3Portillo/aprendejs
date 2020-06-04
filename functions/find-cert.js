const fetch = require("node-fetch")
const { TOKEN = false } = process.env
const BASE_URL = `https://api.airtable.com/v0/appU8sXkXLRsB7KVe/AprendeJS%20-%20Certificados`
const NOT_FOUND_URL = `https://aprendejs.email/certificados/not-found/`
exports.handler = (event, context, callback) => {
  console.log({ event, context })

  const id = event.QueryStringParameters["q"]
  const voidData = () => {
    const nothing = {
      statusCode: 302,
      headers: {
        Location: NOT_FOUND_URL,
      },
    }
    callback(null, nothing)
  }
  if (TOKEN) {
    const URL = `${BASE_URL}/${id}`
    fetch(URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((r) => r.json())
      .then(({ fields }) => {
        if (Array.isArray(fields.cert)) {
          callback(null, {
            statusCode: 302,
            headers: {
              Location: fields.cert[0].url,
            },
          })
        } else voidData()
      })
      .catch(voidData)
  } else voidData()
}
