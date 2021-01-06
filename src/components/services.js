import React from "react"
import {
  FaReact,
  FaLinux,
  FaPython,
  FaPencilRuler,
  FaServer,
  FaRobot,
} from "react-icons/fa"

import Title from "./title"

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaRobot className="service-icon" />,
      title: "automation",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      id: 2,
      icon: <FaPython className="service-icon" />,
      title: "software QA",
      text: `Integer condimentum non enim ac lobortis.`,
    },
    {
      id: 3,
      icon: <FaReact className="service-icon" />,
      title: "web development",
      text: `Vivamus rhoncus arcu purus, et euismod nunc faucibus eu.`,
    },
    {
      id: 4,
      icon: <FaLinux className="service-icon" />,
      title: "linux administration",
      text: `Ut dignissim consectetur neque, at vulputate diam posuere ut.`,
    },
    {
      id: 5,
      icon: <FaPencilRuler className="service-icon" />,
      title: "software design",
      text: `Phasellus cursus lorem quis varius vehicula.`,
    },
    {
      id: 6,
      icon: <FaServer className="service-icon" />,
      title: "database management",
      text: `Maecenas interdum massa in congue interdum.`,
    },
  ]

  return (
    <section className="section bg-grey">
      <Title title="services" />
      <div className="section-center services-center">
        {services.map(({ id, icon, title, text }) => (
          <article key={id} className="service">
            {icon}
            <h4>{title}</h4>
            <div className="underline"></div>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
