const fetch = require("node-fetch")
const { TOKEN = false } = process.env
const URL = `https://api.airtable.com/v0/appU8sXkXLRsB7KVe/AprendeJS%20-%20Certificados?view=List`
exports.handler = (event, context, callback) => {
  const voidData = () => {
    const nothing = {
      statusCode: 200,
      body: JSON.stringify({}),
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
          statusCode: 200,
          body: JSON.stringify(records),
        })
      )
      .catch(voidData)
  } else voidData()
}
