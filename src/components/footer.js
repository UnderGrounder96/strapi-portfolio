import React from "react"

import SocialLinks from "../constants/socialLinks"

const Footer = ({ author }) => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links" />
        <h4>
          &copy; {new Date().getFullYear()}. <strong>{author}</strong>{" "}
          <span>WebDev</span>.
        </h4>
        <p>
          All rights reserved. Built with{" "}
          <a href="https://gatsbyjs.com">
            <span style={{ color: "white", textDecoration: "underline" }}>
              GatsbyJS
            </span>
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

export default Footer
