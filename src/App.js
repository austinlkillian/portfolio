import React from "react";
import "./App.scss";
import "./reset.scss";
import "./type.scss";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { shadows } from "@material-ui/system";

function App() {
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

        <section className="statement">
          <Container>
            <h1>MAKE YOUR MARK</h1>
          </Container>
        </section>

        <section className="intro">
          <Container maxWidth="md">
            <div className="inner-container">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <div className="profile-img-container">
                    <div className="profile-img"></div>
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <p>
                    I work hard to keep creativity alive in all aspects of my life and the lives of those around me. My passion is creation. Whether I'm at work or at home, my mind is always thinking of the next best idea for the project I'm working on and I won't stop until it is great.
                  </p>
                </Grid>
              </Grid>
            </div>
          </Container>
        </section>
      </div>
    </React.Fragment>
  );
}

export default App;
