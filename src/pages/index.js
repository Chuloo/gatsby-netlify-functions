import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bulma/css/bulma.min.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="has-text-centered" style={{ marginTop: "20%" }}>
      <h1 className="is-size-2">Welcome to Pride Rock! . . . or nah 😹</h1>
      <p className="is-size-5" style={{ marginTop: "2%" }}>
        Find within, a fire doggo infinite image gallery built with Gatsby, and
        Images served using Netlify functions from Unsplash. Perfecto!
      </p>
      <button className="button is-dark is-large" style={{ marginTop: "10%" }}>
        <Link to="/gallery/" className="has-text-white">
          Open Sesame! 🔥
        </Link>
      </button>
    </div>
  </Layout>
)

export default IndexPage
