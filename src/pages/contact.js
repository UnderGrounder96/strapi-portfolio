import React from "react"

import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in touch</h3>
          <form method="post" rel="noreferrer noopener" target="_blank">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="form-control"
                required
              />
              <textarea
                name="message"
                name="message"
                rows="7"
                placeholder="your message goes here"
                className="form-control"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              Submit
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default ContactPage
