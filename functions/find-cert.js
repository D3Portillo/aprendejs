const fetch = require("node-fetch")
const { TOKEN = false } = process.env
const BASE_URL = `https://api.airtable.com/v0/appU8sXkXLRsB7KVe/AprendeJS%20-%20Certificados`
const NOT_FOUND_URL = `https://aprendejs.email/certificados/not/found`
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
          fetch(fields.cert[0].url)
            .then((r) => r.buffer())
            .then((buff) => {
              const body = buff.toString("base64")
              console.log(body)
              callback(null, {
                statusCode: 200,
                headers: {
                  "Content-type": "application/pdf",
                  "Access-Control-Allow-Origin": "*",
                },
                body,
              })
            })
            .catch(voidData)
        } else voidData()
      })
      .catch(voidData)
  } else voidData()
}

exports.handler({ path: "algo/recu4u9BkgQaymT5J" }, null, console.log)
