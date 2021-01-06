import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout page="Not Found">
      <img className="center" loading="lazy" src="/404.png" alt="Not Found" />
    </Layout>
  )
}

export default NotFoundPage
