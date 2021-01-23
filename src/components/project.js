import React from "react"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import PropTypes from "prop-types"
import Image from "gatsby-image"

const Project = ({ desc, title, git_url, url, stack, image, index }) => {
  return (
    <article className="project">
      {image && <Image fluid={image.img[0].fluid} className="project-img" />}

      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title}</h3>
        <p className="project-desc">{desc}</p>
        <div className="project-stack">
          {stack.map(item => (
            <span key={item.id}>{item.name}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={git_url} target="_blank" rel="noreferrer noopener">
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url} target="_blank" rel="noreferrer noopener">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  git_url: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
