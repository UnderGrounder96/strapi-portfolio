import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"

const BlogTemplate = ({
  data: {
    blog: { title, content, image },
  },
}) => {
  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <h2>{title}</h2>
            {/* TODO: Find a way to focus an image's content  */}
            {image && <Image fluid={image.img.fluid} className="blog-img" />}
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className="btn center-btn">
            blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      title
      content
      image {
        img: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default BlogTemplate
