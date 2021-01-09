import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Services from "../components/services"
import Jobs from "../components/jobs"
import Projects from "../components/projects"
import Blogs from "../components/blogs"

const IndexPage = ({
  data: {
    strapiProjs: { projs },
    strapiBlogs: { blogs },
  },
}) => {
  return (
    <Layout page="Home">
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projs} title="featured projects" showLink />
      <Blogs blogs={blogs} title="blogs" showLink />
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
    strapiBlogs: allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      blogs: nodes {
        slug
        title
        id
        desc
        date(formatString: "Do MMM, YYYY")
        category
        image {
          img: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
