import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Content from "../components/content"
import ShareUrl from "../components/shareUrl"
import SEO from "../components/seo"

import { useQueryParam, StringParam } from "use-query-params"

import style from "./show.module.css"

const ShowPage = ({ location }) => {
  const [meme, setMeme] = useState(null)
  const [id] = useQueryParam("id", StringParam)

  const domain = location.origin ? location.origin : ""

  useEffect(() => {
    const getData = async () => {
      const r = await fetch(`/.netlify/functions/show?id=${id}`)
      const data = await r.json()
      setMeme(data)
    }
    getData()
  }, [id])

  return (
    <Layout>
      <SEO title="Deel deze meme" />
      {meme ? (
        <>
          <ShareUrl value={`${domain}/meme/${id}`} />
          <Content {...meme} />
        </>
      ) : (
        <p className={style.loading}>Meme aan het genereren...</p>
      )}
    </Layout>
  )
}

export default ShowPage
