import React from "react"
import { FaAngleDoubleRight } from "react-icons/fa"
import { Link, graphql, useStaticQuery } from "gatsby"

import Title from "./title"

const Jobs = () => {
  const query = graphql`
    {
      strapi: allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
        jobs: nodes {
          strapiId
          date
          company
          position
          desc {
            id
            name
          }
        }
      }
    }
  `
  const {
    strapi: { jobs },
  } = useStaticQuery(query)
  const [value, setValue] = React.useState(0)
  const { company, date, desc, position } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="Experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => (
            <button
              key={job.strapiId}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && "active-btn"}`}
            >
              {job.company}
            </button>
          ))}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => (
            <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.name}</p>
            </div>
          ))}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
