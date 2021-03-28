import React from "react"
import WaveIcon from "../components/icons/waveIcon"
import ProfileBuildingIcon from "../components/icons/profileBuildingIcon"
import {
  ReactIcon,
  JavaScriptIcon,
  HtmlIcon,
  SassIcon,
  ShopifyIcon,
} from "../components/icons/logoIcons"

const Introduction = () => {
  return (
    <div className="container">
      <WaveIcon />
      <div className="introduction__container">
        <ProfileBuildingIcon />
        <div className="introduction__container--header">
          <h1>About Me</h1>
        </div>
        <div className="introduction__container--sidebar">
          <div className="introduction__container--content">
            <p>
              Experienced Web Developer accomplished in all stages of advanced
              web development, bringing forth expertise in design, development
              and a talented skill-set in solution architecture, integrations
              and devOps.
            </p>
            <h3>Skills</h3>
            <div className="introduction__icon">
              <ReactIcon />
              <JavaScriptIcon />
              <HtmlIcon />
              <SassIcon />
              <ShopifyIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
