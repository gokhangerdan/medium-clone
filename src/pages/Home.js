import React from 'react';
import { Button, Container, Grid } from "@material-ui/core";

import Navigation from '../components/Navigation';


function Home() {
  
    return (
      <div>
        <Navigation />
        <div className="App_MainSection">
            <Container>
              <Grid container alignItems="center">
                <Grid item lg={6}>
                  <h1>Medium is a place to write, read, and connect</h1>

                  <p>
                    Read and share new perspectives on just about any topic.
                    Everyone’s welcome. <a href="!#">Learn more.</a>
                  </p>

                  <Button>Start Writing</Button>
                </Grid>
              </Grid>
            </Container>
          </div>
      </div>
    );
  }
  
  export default Home;