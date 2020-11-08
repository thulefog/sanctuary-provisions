import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Button from "@material-ui/core/Button"

import flyover from "../images/mavericks-flyover.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>PROVISIONS</h1>
    <p>Welcome to the El Granada Sanctuary.</p>
    <p></p>

    <div style={{ maxWidth: `512px`, marginBottom: `1.45rem` }}>
    <img src={flyover} alt="mavericks" />
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
export default IndexPage
