// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const getRandom = require('random-words')

exports.handler = async (event, context) => {
  try {
    const rando = getRandom()
    return {
      statusCode: 200,
      body: JSON.stringify({ inspiration: rando })
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
