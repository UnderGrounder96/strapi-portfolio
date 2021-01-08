import React from "react"
import { Link } from "gatsby"

import Title from "./title"
import Project from "./project"

const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((proj, index) => (
          <Project key={proj.id} index={index} {...proj} />
        ))}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default Projects
