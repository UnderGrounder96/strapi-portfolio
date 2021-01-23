import React from "react"
import {
  FaInstagram,
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaTwitch,
} from "react-icons/fa"

export default ({ styleClass }) => {
  const data = [
    {
      id: 1,
      icon: <FaInstagram className="social-icon" />,
      url: "https://instagram.com/undergrounder96",
    },
    {
      id: 2,
      icon: <FaLinkedin className="social-icon" />,
      url: "https://bit.ly/2AV9b0N",
    },
    {
      id: 3,
      icon: <FaGithubSquare className="social-icon" />,
      url: "https://github.com/undergrounder96",
    },
    {
      id: 4,
      icon: <FaTwitterSquare className="social-icon" />,
      url: "https://twitter.com/undergrounder96",
    },
    {
      id: 5,
      icon: <FaTwitch className="social-icon" />,
      url: "https://twitch.tv/undergrounder96/",
    },
  ]

  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>
      {data.map(link => (
        <li key={link.id}>
          <a
            href={link.url}
            className="social-link"
            target="_blank"
            rel="noreferrer noopener"
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
