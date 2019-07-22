import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <h1 className="is-size-3">Images from Unsplash...</h1>
    <p>
      Now this is the Law of the Jungle, as old and true as the sky... bleh bleh
      bleh
    </p>
  </Layout>
)

export default SecondPage
