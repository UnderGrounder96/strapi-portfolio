/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "./seo"
import Header from "./header"
import Sidebar from "./sidebar"
import Footer from "./footer"

import "../css/layout.css"

const Layout = ({ children, page }) => {
  const [showSidebar, setShowSidebar] = React.useState(false)
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        meta: siteMetadata {
          title
          author
          description
        }
      }
    }
  `)

  return (
    <>
      <SEO
        author={site.meta.author}
        description={site.meta.description}
        title={site.meta.title}
        page={page}
      />
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      {children}
      <Footer author={site.meta.author} />
    </>
  )
}

export default Layout
