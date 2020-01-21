import React from "react";
import "./App.scss";
import "./reset.scss";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

function App() {

  return (
    <React.Fragment>
      <CssBaseline />

      <div className="main home">
        <header className="hero">
          <div>
            <h1>MY NAME IS AUSTIN KILLIAN</h1>

            <h2>hear me roar</h2>
          </div>
        </header>

        <section className="intro">
          <h2>
            I believe in creativity and applying it to everything that you do.
          </h2>

          <Grid container>
            <Grid item xs={12}>
              <div className="item">
                <h4>MAKE YOUR MARK</h4>
              </div>
            </Grid>
          </Grid>
        </section>
      </div>
    </React.Fragment>
  );
}

export default App;
