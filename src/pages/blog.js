import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Blogs from "../components/blogs"

const BlogPage = ({
  data: {
    strapi: { blogs },
  },
}) => {
  return (
    <Layout page="Blogs">
      <section className="blog-page">
        <Blogs blogs={blogs} title="blogs" />
      </section>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  {
    strapi: allStrapiBlogs {
      blogs: nodes {
        slug
        title
        id
        desc
        date(formatString: "Do MMM, YYYY")
        content
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
