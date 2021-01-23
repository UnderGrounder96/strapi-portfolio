import React from "react"
import { FaTimes } from "react-icons/fa"

import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${showSidebar ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <Links styleClass={`${showSidebar ? "sidebar-links" : ""}`} />
        <SocialLinks styleClass={`${showSidebar ? "sidebar-icons" : ""}`} />
      </div>
    </aside>
  )
}

export default Sidebar
