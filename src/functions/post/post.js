const contentful = require("contentful-management")
const shortid = require("shortid")
const querystring = require("querystring")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
})

exports.handler = async function(event, context, callback) {
  try {
    const meme = querystring.parse(event.body)
    meme.id = shortid.generate()

    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
    const environment = await space.getEnvironment("master")
    const entry = await environment.createEntryWithId("meme", meme.id, {
      fields: {
        person: {
          "en-US": meme.person,
        },
        dislike: {
          "en-US": meme.dislike,
        },
        like: {
          "en-US": meme.like,
        },
      },
    })
    await entry.publish()

    return callback(null, {
      body: JSON.stringify(entry.fields),
      statusCode: 302,
      headers: {
        Location: `/meme/${meme.id}`,
      },
    })
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
