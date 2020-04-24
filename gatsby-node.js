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
              dislike
              like
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
    console.log(node)
    createPage({
      path: `meme/${node.id}`,
      component: path.resolve(`./src/templates/meme.js`),
      context: {
        id: node.id,
        person: node.person,
        like: node.like,
        dislike: node.dislike,
      },
    })
  })
}
