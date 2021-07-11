import { Button, Container, Grid } from "@material-ui/core";

function Hero() {
  return (
    <div className="Hero">
      <Container>
        <Grid container alignItems="center">
          <Grid item lg={6}>
            <h1>Medium is a place to write, read, and connect</h1>

            <p>
              Read and share new perspectives on just about any topic.
              Everyone’s welcome. <a href="!#">Learn more.</a>
            </p>

            <Button disableRipple={true}>Start Writing</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Hero;