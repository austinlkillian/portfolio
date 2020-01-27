import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";


class Project extends Component {
  render() {
    const data = this.props.data

    const slides = data.slides.map((slide, i) => {
      return (
        <div key={i}>
          <img src={slide} alt=""/>
        </div>
      )
    })
    return (
      <div className="project">
        <Fade up>
          <h2 className="textcenter">{ data.title }</h2>
        </Fade>

        <Fade>
          <Carousel 
            showThumbs={false} 
            showStatus={false} 
            infiniteLoop={true}
          >
            {slides}
          </Carousel>
        </Fade>

        <Fade up>
          <div className="project-info">
            
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <a className="button" href={data.link} target="_blank">{ data.title }</a>
              </Grid>

              <Grid item xs={8}>
                <p>{ data.description }</p>
              </Grid>

              <Grid item xs={8}>
                <p>{ data.technologies }</p>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </div>
    )
  }
}

export default Project;