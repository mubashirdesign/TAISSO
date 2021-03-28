import React from "react"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout>
      <div className="contact">
        <div className="container">
          <div className="container__content">
            <div>
              <h1>Contact Me</h1>
              <h3>Front-End Development. eCommerce Development. Consulting.</h3>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="container__inner">
            <form method="post" action="https://formspree.io/xrggnvrz">
              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="_replyto" />
              </div>
              <div className="contact__field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" name="subject" />
              </div>
              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea cols="30" rows="10" name="message"></textarea>
              </div>
              <div className="contact__field">
                <label htmlFor="button" className="hidden">
                  Submit
                </label>
                <button
                  name="button"
                  className="contact__button"
                  type="submit"
                  value="Send"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
