import React, { Component } from "react";
import { Button, Container, Grid, withStyles } from "@material-ui/core";

import Navigation from '../components/Navigation.js';
import Hero from '../components/Hero.js';
import Trending from "../components/Trending.js";
import DiscoverPost from "../components/DiscoverPost.js";
import Discover from "../components/Discover.js";

import user1 from '../static/user1.png';
import user2 from '../static/user2.png';
import user3 from '../static/user3.png';
import user4 from '../static/user4.png';
import user5 from '../static/user5.png';
import user6 from '../static/user6.png';
import image1 from "../static/image1.jpeg";
import image2 from "../static/image2.jpeg";
import image3 from "../static/image3.jpeg";
import image4 from "../static/image4.jpeg";
import image5 from "../static/image5.jpeg";
import image6 from "../static/image6.jpeg";
import bookmark from "../static/bookmark.svg"


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
              <DiscoverPost
                image={user1}
                author={"Ella Alderson"}
                title={"This Long-Awaited Technology May Finally Change the World"}
                summary={"Solid-state batteries are poised to emerge in the coming years"}
                date={"May 30"}
                time={"6 min"}
                category={"Science"}
                bookmark={bookmark}
                postImage={image1}
              />
              <DiscoverPost
                image={user2}
                author={"Emma Pattee"}
                title={"Anxiety Is in Your Body, Not Your Mind"}
                summary={"Why you might want to stop talking about your anxiety and try this instead"}
                date={"Apr 5"}
                time={"7 min"}
                category={"Anxiety"}
                bookmark={bookmark}
                postImage={image2}
              />
              <DiscoverPost
                image={user3}
                author={"Sean Kernan"}
                title={"You Aren’t Lazy. You Are Overstimulated."}
                summary={"Slowing your life down is the secret to getting things done."}
                date={"Jun 2"}
                time={"4 min"}
                category={"Life"}
                bookmark={bookmark}
                postImage={image3}
              />
              <DiscoverPost
                image={user4}
                author={"Ben Le Fort"}
                title={"Generating Passive Income Is Hard, Here Is a Better Option"}
                summary={"The Brutal truth about passive income"}
                date={"Jan 25"}
                time={"6 min"}
                category={"Money"}
                bookmark={bookmark}
                postImage={image4}
              />
              <DiscoverPost
                image={user5}
                author={"Hannah Furst"}
                title={"A Man In His 30s Explains To Me What’s Wrong With Women In Their 30s"}
                summary={"Those bloody women over 35… They’re all tick-tock, tick-tock."}
                date={"Apr 7"}
                time={"4 min"}
                category={"Humor"}
                bookmark={bookmark}
                postImage={image5}
              />
              <DiscoverPost
                image={user6}
                author={"Annabelle Wagner"}
                title={"Online Dating Tips for Women (By Men)"}
                summary={"They set the rules. They just seem to have a hard time following them"}
                date={"May 27"}
                time={"6 min"}
                category={"Love"}
                bookmark={bookmark}
                postImage={image6}
              />
            </Grid>
            <Grid className={classes.item2} item lg={1} md={1} sm={1} xs={12}>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12} className={classes.item3}>
              <Discover />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}


export default withStyles(styles)(Home);