import React from "react"

import SocialLinks from "../constants/socialLinks"

const Footer = ({ author }) => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links" />
        <h4>
          Copyright &copy; {new Date().getFullYear()}. <strong>{author}</strong>
          {" - "}
          <span>WebDev</span>.
        </h4>
      </div>
    </footer>
  )
}

export default Footer
