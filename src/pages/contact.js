import React from "react"

import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in touch</h3>
          <form name="contact" method="post" netlify>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="your name"
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
                rows="7"
                placeholder="your message goes here"
                className="form-control"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              Send
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default ContactPage
