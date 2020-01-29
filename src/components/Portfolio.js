import React, { Component } from 'react';
import projectData from "./../projects/project.json"

import "./../scss/components/Portfolio.scss";
import Project from "./Project"

import Container from "@material-ui/core/Container";
import Fade from "react-reveal/Fade";

class Portfolio extends Component {
  render() {
    return (
      <section className="portfolio">
        <Container>
          <Fade up>
            <h1 className="portfolio-title textcenter">PORTFOLIO</h1>
          </Fade>

          <Project
            data={projectData.weberstate}
          />

          <Project
            data={projectData.iceslicer}
          />

          <Project
            data={projectData.arnoldmachinery}
          />

          <Project
            data={projectData.racetothemoon}
          />
        </Container>
      </section>
    )
  }
}

export default Portfolio;