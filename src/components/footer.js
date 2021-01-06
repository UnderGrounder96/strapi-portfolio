import React from "react"

import SocialLinks from "../constants/socialLinks"

const Footer = () => {
  return (
    <h2>
      {" "}
      &copy; {new Date().getFullYear()}. AUTHOR - <strong>Portfolio</strong>.
      All rights reserved. Built with
      {` `}
      <a href="https://gatsbyjs.com">Gatsby</a>
    </h2>
  )
}

export default Footer
