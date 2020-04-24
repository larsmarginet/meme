import React from "react"
import Layout from "../components/layout"
import Content from "../components/content"
import Meme from "../components/meme"
import style from "./meme.module.css"
import { Link } from "gatsby"
import SEO from "../components/seo"

export default ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Je hebt een meme gekregen" />
      <Content {...pageContext} />
      <p className={style.note}>
        Maak <Link to="/create">hier</Link> je eigen meme
      </p>
    </Layout>
  )
}
