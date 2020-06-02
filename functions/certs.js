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
          body: JSON.stringify(
            records
              .filter((e) => {
                return Array.isArray(e.fields.cert)
              })
              .map(
                ({
                  fields: {
                    name = "Usuario",
                    email = "noemail@service.has",
                    cert,
                    picture,
                  },
                }) => {
                  return {
                    name,
                    email,
                    cert: cert[0].url,
                    picture: picture
                      ? picture[0].url
                      : `/images/no-profile.png`,
                  }
                }
              )
          ),
        })
      )
      .catch(voidData)
  } else voidData()
}


