import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  BehanceIcon,
  CssIcon,
  HtmlIcon,
  JavaScriptIcon,
  DribbbleIcon,
  GoogleIcon,
  NielsonIcon,
  FIcon,
} from "../components/icons/logoIcons"

const Resources = () => (
  <Layout>
    <SEO title="Resources" />
    <div className="resources">
      <div className="container">
        <div className="container__content">
          <div>
            <h1>Resources</h1>
            <h3>The one stop shop for all your development needs.</h3>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container__inner">
          <div className="margin-bottom-medium">
            <h3 id="d" className="resources__header margin-bottom-medium">
              Design
            </h3>
            <div className="resources__row">
              <a href="https://dribbble.com" className="resources__row--item">
                <DribbbleIcon />
                <h3>Dribbble</h3>
                <p>Graphic Design Inspiration</p>
              </a>
              <a
                href="https://www.behance.net/galleries"
                className="resources__row--item"
              >
                <div>
                  <BehanceIcon />
                  <h3>Behance</h3>
                  <p>Amazing inspirational web design</p>
                </div>
              </a>
            </div>
          </div>

          <div className="margin-bottom-medium">
            <h3 id="e" className="resources__header margin-bottom-medium">
              Ecommerce
            </h3>
            <div className="resources__row">
              <a
                href="https://services.google.com/fh/files/events/pdf_retail_ux_playbook.pdf"
                className="resources__row--item"
              >
                <GoogleIcon />
                <h3>Google eCommerce</h3>
                <p>Best in class eCommerce tips</p>
              </a>
            </div>
          </div>

          <div className="margin-bottom-medium">
            <h3 id="l" className="resources__header margin-bottom-medium">
              Learning
            </h3>
            <div className="resources__row">
              <a
                href="https://javascript.info/"
                className="resources__row--item"
              >
                <JavaScriptIcon />
                <h3>JavaScript Info</h3>
                <p>The Modern JavaScript Tutorial</p>
              </a>
            </div>
          </div>

          <div className="margin-bottom-medium">
            <h3 id="n" className="resources__header margin-bottom-medium">
              Newsletters
            </h3>
            <div className="resources__row">
              <a
                href="https://css-weekly.com/archives/"
                className="resources__row--item"
              >
                <CssIcon />
                <h3>CSS Weekly</h3>
                <p>Weekly CSS Newsletter</p>
              </a>
              <a
                href="https://frontendfoc.us/issues"
                className="resources__row--item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HtmlIcon />
                <h3>FrontEnd Focus</h3>
                <p>Front-End Weekly Newsletters</p>
              </a>
              <a
                href="https://javascriptweekly.com/issues"
                className="resources__row--item"
              >
                <JavaScriptIcon />
                <h3>JavaScript Weekly</h3>
                <p>JavaScript Weekly Newsletters</p>
              </a>
            </div>
          </div>

          <div className="margin-bottom-medium">
            <h3 id="r" className="resources__header margin-bottom-medium">
              Resources
            </h3>
            <div className="resources__row">
              <a href="https://free-for.dev/" className="resources__row--item">
                <FIcon />
                <h3>Free For Dev</h3>
                <p>Free Development Resources</p>
              </a>
            </div>
          </div>

          <div className="margin-bottom-medium">
            <h3 id="u" className="resources__header margin-bottom-medium">
              User Experience
            </h3>
            <div className="resources__row">
              <a
                href="https://www.nngroup.com/"
                className="resources__row--item"
              >
                <NielsonIcon />
                <h3>Nielsen Norman Group</h3>
                <p>World Leaders in User Experience</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Resources
