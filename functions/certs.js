const fetch = require("node-fetch")
const { TOKEN = "" } = process.env
const URL = `https://api.airtable.com/v0/appU8sXkXLRsB7KVe/AprendeJS%20-%20Certificados?view=List`
exports.handler = (event, context, callback) => {
  const voidData = () => {
    const nothing = {
      statusCode: 200,
      body: JSON.stringify({}),
    }
    callback(null, nothing)
  }
  fetch(URL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
    .then((r) => r.json())
    .then(({ records }) =>
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(
          records
            .filter((e) => {
              return Array.isArray(e.fields.cert)
            })
            .map(
              ({
                id,
                fields: {
                  name = "Usuario",
                  email = "noemail@service.has",
                  picture,
                },
              }) => {
                return {
                  id,
                  name,
                  email,
                  picture: Array.isArray(picture)
                    ? picture[0].thumbnails.large.url
                    : `/images/no-profile.png`,
                }
              }
            )
        ),
      })
    )
    .catch(voidData)
}
