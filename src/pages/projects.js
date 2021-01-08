import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Projects from "../components/projects"

const ProjectsPage = ({
  data: {
    strapi: { projs },
  },
}) => {
  return (
    <Layout page="Projects">
      <section className="projects-page">
        <Projects projects={projs} title="projects" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    strapi: allStrapiProjects {
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

export default ProjectsPage
