import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout page="Not Found">
      <section className="error-page">
        <div className="error-container">
          <h1>404: Page Not Found</h1>
          <Link to="/" className="btn">
            Go Home
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
