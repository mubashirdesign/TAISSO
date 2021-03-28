import React from "react"
import StreakIcon from "../components/icons/streakIcon"
import TorontoIcon from "../components/icons/torontoIcon"
import { GitHubIcon, LinkedinIcon } from "./icons/logoIcons"
import Terminal from "../components/terminal"

const Banner = () => {
  return (
    <div className="banner container">
      <div className="banner__content container__content">
        <div>
          <h3>Hello I'm</h3>
          <h1>Mubashir Cheentavida</h1>
          <h2>Front-End Developer</h2>
          <div className="banner__icons">
            <a
              className="banner__icons--icon"
              href="https://github.com/mubashirdesign"
            >
              <GitHubIcon />
            </a>
            <a
              className="banner__icons--icon"
              href="https://www.linkedin.com/in/mubashir-cheentavida/"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
        <Terminal />
      </div>
      <TorontoIcon />
    </div>
  )
}

export default Banner
