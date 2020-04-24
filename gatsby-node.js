const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allContentfulMeme {
          edges {
            node {
              id: contentful_id
              person
              like
              dislike 
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  result.data.allContentfulMeme.edges.forEach(({ node }) => {
    createPage({
      path: `meme/${node.id}`,
      component: path.resolve(`./src/templates/meme.js`),
      context: {
        id: node.id,
        person: node.from,
        like: node.to,
        dislike: node.message,
      },
    })
  })
}
