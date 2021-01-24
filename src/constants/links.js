import React from "react"
import { Link } from "gatsby"

export default ({ styleClass }) => {
  const data = [
    {
      id: 1,
      text: "home",
      url: "/",
    },
    {
      id: 2,
      text: "about",
      url: "/about/",
    },
    {
      id: 3,
      text: "projects",
      url: "/projects/",
    },
    {
      id: 4,
      text: "blogs",
      url: "/blog/",
    },
    {
      id: 5,
      text: "contact",
      url: "/contact/",
    },
  ]

  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {data.map(link => (
        <li key={link.id}>
          <Link to={link.url}>{link.text}</Link>
        </li>
      ))}
    </ul>
  )
}
