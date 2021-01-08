import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Services from "../components/services"
import Jobs from "../components/jobs"
import Projects from "../components/projects"
import Blogs from "../components/blogs"

// ...GatsbyImageSharpFluid

const IndexPage = () => {
  return (
    <Layout page="Home">
      <Hero />
      <Services />
      <Jobs />
    </Layout>
  )
}

export default IndexPage
