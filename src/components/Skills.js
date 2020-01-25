import React, { Component } from "react";
import "./../scss/components/Skills.scss";

/// IMAGES ///
import axiosImg from "./../img/skills/axios.png";
import cssImg from "./../img/skills/css.png";
import htmlImg from "./../img/skills/html.png";
import javascriptImg from "./../img/skills/javascript.png";
import jqueryImg from "./../img/skills/jquery.png";
import laravelImg from "./../img/skills/laravel.png";
import phpImg from "./../img/skills/php.png";
import reactImg from "./../img/skills/react.png";
import sassImg from "./../img/skills/sass.png";
import uikitImg from "./../img/skills/uikit.png";
import vueImg from "./../img/skills/vue.png";

/// MATERIAL UI IMPORTS ///
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Fade from "react-reveal/Fade";

class Skills extends Component {
  render() {
    return (
      <section className="skills">
        <Container>
          <Fade up>
            <Grid container justify="center" alignItems="center" spacing={2}>
              <Grid item xs={12}>
                <h1 className="textcenter">SKILLS</h1>
              </Grid>
            </Grid>
          </Fade>

          <Fade up>
            <Grid container justify="center" alignItems="center" spacing={2}>
              <Grid item xs={3}>
                <img src={axiosImg} alt="axios" />
              </Grid>

              <Grid item xs={3}>
                <img src={cssImg} alt="css" />
              </Grid>

              <Grid item xs={3}>
                <img src={htmlImg} alt="html" />
              </Grid>

              <Grid item xs={3}>
                <img src={javascriptImg} alt="javascript" />
              </Grid>

              <Grid item xs={3}>
                <img src={jqueryImg} alt="jquery" />
              </Grid>

              <Grid item xs={3}>
                <img src={laravelImg} alt="laravel" />
              </Grid>

              <Grid item xs={3}>
                <img src={phpImg} alt="php" />
              </Grid>

              <Grid item xs={3}>
                <img src={reactImg} alt="react" />
              </Grid>

              <Grid item xs={3}>
                <img src={sassImg} alt="sass" />
              </Grid>

              <Grid item xs={3}>
                <img src={uikitImg} alt="uikit" />
              </Grid>

              <Grid item xs={3}>
                <img src={vueImg} alt="vue" />
              </Grid>
            </Grid>
          </Fade>
        </Container>
      </section>
    );
  }
}

export default Skills;
