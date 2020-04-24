/* eslint-disable */
const contentful = require("contentful-management")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
})

const storage = new Map()

exports.handler = async function(event, context) {
  try {
    const id = event.queryStringParameters.id.replace("/", "")
    let meme;
    if (storage.has(id)) {
      meme = storage.get(id)
    }else{
      const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
      const environment = await space.getEnvironment("master")
      const entry = await environment.getEntry(id)

      meme = {
        person: entry.fields.person["en-US"],
        dislike: entry.fields.dislike["en-US"],
        like: entry.fields.like["en-US"],
      }
      storage.set(id, meme)
    }


    return {
      statusCode: 200,
      body: JSON.stringify(meme),
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
