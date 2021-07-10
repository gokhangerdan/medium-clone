import React, { Component } from "react";
import { Button, Container, Grid, withStyles } from "@material-ui/core";

import Navigation from '../components/Navigation.js';
import Hero from '../components/Hero.js';
import Trending from "../components/Trending.js";
import DiscoverPost from "../components/DiscoverPost.js"


const styles = theme => ({
  item1: {
    order: 3,
    [theme.breakpoints.up("sm")]: {
      order: 1
    }
  },
  item2: {
    order: 2,
    [theme.breakpoints.up("sm")]: {
      order: 2
    }
  },
  item3: {
    order: 1,
    [theme.breakpoints.up("sm")]: {
      order: 3
    }
  }
});


class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Navigation />
        <Hero />
        <Trending />
        <Container>
          <Grid container>
            <Grid item lg={7} md={7} sm={7} xs={12} className={classes.item1}>
              <DiscoverPost />
            </Grid>
            <Grid className={classes.item2} item lg={1} md={1} sm={1} xs={12}>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12} className={classes.item3}>
              <div className="Discover">
                <div className="Discover_Headline">
                  <p>DISCOVER MORE OF WHAT MATTERS TO YOU</p>
                </div>
                <div className="Discover_Categories">
                  <p>Self</p>
                  <p>Relationships</p>
                  <p>Data Science</p>
                  <p>Programming</p>
                  <p>Productivity</p>
                  <p>Javascript</p>
                  <p>Machine Learning</p>
                  <p>Politics</p>
                  <p>Health</p>
                </div>
              </div>
              <div className="All_Topics_Button">
                <p>See all topics</p>
              </div>
              <div className="Footer_Menu">
                <p>Help</p>
                <p>Status</p>
                <p>Writers</p>
                <p>Blog</p>
                <p>Careers</p>
                <p>Privacy</p>
                <p>Terms</p>
                <p>About</p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}


export default withStyles(styles)(Home);