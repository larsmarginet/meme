import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./index.module.css"
//import Meme from "../components/meme"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {/* <Meme /> */}
    <Link to="/create" className={style.button}>
      maak een meme
    </Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allContentfulMeme {
      edges {
        node {
          id: contentful_id
        }
      }
    }
  }
`
