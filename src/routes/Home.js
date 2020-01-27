import React, { Component } from "react";
import "./../scss/Home.scss";

import Skills from "./../components/Skills"
import Portfolio from "./../components/Portfolio"

import github from "./../img/github.png"
import linkedin from "./../img/linkedin.png"

/// MATERIAL UI IMPORTS ///
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Fade from "react-reveal/Fade";



class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <CssBaseline />

        <div className="main home">
          <header className="hero">
            <Container maxWidth="md">
              <div>
                <h1>
                  I'M
                  <br />
                  AUSTIN KILLIAN
                </h1>

                <h2>WEB DEVELOPER</h2>

                <h3>WITH AN EDGE</h3>
              </div>
            </Container>
          </header>

          <section className="intro">
            <Container maxWidth="md">
              <Fade up>
                <h1 className="textcenter">LEAVE YOUR MARK</h1>
              </Fade>

              <Fade bottom>
                <div className="inner-container">
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <div className="profile-img-container">
                        <div className="profile-img"></div>
                      </div>
                    </Grid>

                    <Grid item xs={12}>
                      <p>
                        I work hard to keep creativity alive in all aspects of
                        my life and the lives of those around me. My passion is
                        creation. Whether I'm at work or at home, my mind is
                        always thinking of the next best idea for the project
                        I'm working on and I won't stop until it is great.
                      </p>
                    </Grid>
                  </Grid>
                </div>
              </Fade>
            </Container>
          </section>

          <Skills />

          <Portfolio />

          <section className="contact">
            <Container maxWidth="md">
              <Fade up>
                <h1 className="textcenter">CONTACT</h1>
              </Fade>

              <Fade bottom>
                <div className="inner-container">
                  <Grid container justify="center" alignItems="center" spacing={3}>
                    <Grid item xs={8}>
                      <p>
                        I work hard to keep creativity alive in all aspects of
                        my life and the lives of those around me. My passion is
                        creation. Whether I'm at work or at home, my mind is
                        always thinking of the next best idea for the project
                        I'm working on and I won't stop until it is great.
                      </p>

                      <div className="contact-info">
                        <a href="mailto: austin.l.killian@gmail.com">
                          austin.l.killian@gmail.com
                        </a>

                        <a href="tel: 1-509-942-4449">
                          Tel: 1-509-942-4449
                        </a>
                      </div>

                      <div className="social-links">
                        <a href="https://github.com/austinlkillian" target="_blank">
                          <img src={github} />
                        </a>

                        <a href="https://www.linkedin.com/in/austinlkillian/" target="_blank">
                          <img src={linkedin} />
                        </a>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Fade>
            </Container>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
