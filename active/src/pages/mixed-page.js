import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from "@material-ui/core/Button"

import JSONData from "../content/mixed.json"

const MixedPage = () => (
  <Layout>
   <SEO title="MIXED" />
    <Link to="/">home</Link>
       <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>    
       <h1>{JSONData.title}</h1>
    <p>These are the selection of Mixed drinks, made to order.</p>
    <ul>
      {JSONData.content.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.item}</li>
      })}
    </ul>
   </div>

    <div>
      <Button variant="outlined" size="lg" active  href="/distilled-page/"> DISTILLED </Button>
      <Button variant="outlined" size="lg" active  href="/mixed-page/"> MIXED </Button>
      <Button variant="outlined" size="lg" active  href="/vined-page/"> VINED </Button>
      <Button variant="outlined" size="lg" active  href="/brewed-page/"> BREWED </Button>
      <Button variant="outlined" size="lg" active  href="/unleaded-page/"> UNLEADED </Button>
    </div>

  </Layout>
)

export default MixedPage
