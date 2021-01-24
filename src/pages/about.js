import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Title from "../components/title"
import Layout from "../components/layout"

const AboutPage = ({
  data: {
    strapi: { about },
  },
}) => {
  const { title, stack, image, info } = about[0]
  return (
    <Layout page={title}>
      <section className="about-page">
        <div className="section-center about-center">
          {image && <Image fluid={image.img.fluid} className="about-img" />}
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => (
                <span key={item.id}>{item.name}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    strapi: allStrapiAbout {
      about: nodes {
        image {
          img: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        stack {
          id
          name
        }
        info
      }
    }
  }
`

export default AboutPage
