import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Services from "../components/services"
import Jobs from "../components/jobs"
import Projects from "../components/projects"

const IndexPage = ({
  data: {
    strapiProjs: { projs },
  },
}) => {
  return (
    <Layout page="Home">
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projs} title="featured projects" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    strapiProjs: allStrapiProjects(filter: { featured: { eq: true } }) {
      projs: nodes {
        title
        desc
        featured
        url
        git_url
        id
        image {
          img: childrenImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          name
        }
      }
    }
  }
`

export default IndexPage
