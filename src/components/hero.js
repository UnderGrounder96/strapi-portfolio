import React from "react"
import Image from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"

import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Lucio Afonso</h1>
            <h4>Freelancer web and mobile UI/UX Designer</h4>
            <Link to="/contact" className="btn">
              let's chat
            </Link>
            <SocialLinks />
          </div>
        </article>

        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
