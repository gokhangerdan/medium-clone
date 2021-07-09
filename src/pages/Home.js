import { Button, Container, Grid } from "@material-ui/core";

import Navigation from '../components/Navigation.js';
import Hero from '../components/Hero.js';
import Trending from "../components/Trending.js";
import DiscoverPost from "../components/DiscoverPost.js"


function Home() {
  
    return (
      <div>
        <Navigation />
        <Hero />
        <Trending />
        <Container>
          <Grid container>
            <Grid item lg={7} md={7} sm={7} xs={12}>
              <DiscoverPost />
            </Grid>
            <Grid item lg={5} md={5} sm={5} xs={12}>
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
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
  
  export default Home;