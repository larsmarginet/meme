import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Meme from "../components/meme"
import Form from "../components/form"

const CreatePage = () => (
  <Layout>
    
    <SEO title="Create" />
    <Meme />
    <Form />
    
  </Layout>
)

export default CreatePage
