import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const BlogTemplate = ({
  data: {
    blog: { content },
  },
}) => {
  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
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
      content
    }
  }
`

export default BlogTemplate
