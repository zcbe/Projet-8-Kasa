import React, { Component } from "react";
import ImageBanner from "../components/ImageBanner.jsx";
import "../scss/AboutPage.scss";
import Collapse from "../components/Collapse.jsx";

export class AboutPage extends Component {
  render() {
    return (
      <>
        <div className="about__banner">
          <ImageBanner />
        </div>
        <div className="about__container">
          <Collapse title="Fiabilité" content="..." />
          <Collapse title="Respect" content="..." />
          <Collapse title="Service" content="..." />
          <Collapse title="Sécurité" content="..." />
        </div>
      </>
    );
  }
}

export default AboutPage;
