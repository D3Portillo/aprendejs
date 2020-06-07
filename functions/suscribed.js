const fetch = require("node-fetch")
const { OCTUPUS = "" } = process.env
const URL = `https://emailoctopus.com/api/1.5/lists/e0973809-a25a-11ea-a3d0-06b4694bee2a/contacts/subscribed?api_key=${OCTUPUS}`
exports.handler = (event, context, callback) => {
  const voidData = () => {
    const nothing = {
      statusCode: 200,
      body: JSON.stringify({
        total: 0,
      }),
    }
    callback(null, nothing)
  }
  fetch(URL)
    .then((r) => r.json())
    .then(({ data = [] }) =>
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          total: data.length,
        }),
      })
    )
    .catch(voidData)
}
