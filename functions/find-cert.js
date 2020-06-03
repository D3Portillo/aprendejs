const fetch = require("node-fetch")
const { TOKEN = false } = process.env
const URL = `https://api.airtable.com/v0/appU8sXkXLRsB7KVe/AprendeJS%20-%20Certificados?view=List`
const PDF_URL = `https://dl.airtable.com/.attachments/2c43383bddce36b4b4fdb2458fb95109/c17ea3ff/template.pdf`
const NOT_FOUND_URL = `https://aprendejs.email/certificados/not-found/`
exports.handler = (event, context, callback) => {
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
    fetch(URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((r) => r.json())
      .then(({ records }) =>
        callback(null, {
          statusCode: 302,
          headers: {
            Location: PDF_URL,
          },
        })
      )
      .catch(voidData)
  } else voidData()
}
