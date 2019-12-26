import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import JSONData from "../content/distilled.json"

const DistilledPage = () => (
  <Layout>
   <SEO title="DISTILLED" />
    <Link to="/">home</Link>
       <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>    
       <h1>{JSONData.title}</h1>
    <p>These are the selection of Distilled Spirits from around the world.</p>
    <ul>
      {JSONData.content.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.item}</li>
      })}
    </ul>
   </div>

  </Layout>
)

export default DistilledPage
