import { Button, Container, Grid } from "@material-ui/core";

import TrendingPost from "../components/TrendingPost";

import trending from '../static/trending.svg';
import user1 from '../static/user1.png'
import user2 from '../static/user2.png'
import user3 from '../static/user3.png'
import user4 from '../static/user4.png'
import user5 from '../static/user5.png'
import user6 from '../static/user6.png'

function Trending() {
  return (
    <div className="Trending">
      <Container>
        <div className="Trending_Headline">
          <img src={trending} /><p>TRENDING ON MEDIUM</p>
        </div>
        <Grid container>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <TrendingPost
              number={"01"}
              image={user1}
              author={"Lance Ng"}
              title={"The AI Wolf That Preferred Suicide Over Eating Sheep"}
              date={"Jul 6"}
              time={"6"}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <TrendingPost
              number={"02"}
              image={user2}
              author={"Sequoia"}
              title={"The Latin American Startup Opportunity"}
              date={"Jul 7"}
              time={"8"}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <TrendingPost
              number={"03"}
              image={user3}
              author={"Jon Bell"}
              title={"Goodbye, Mike Kruzeniski"}
              date={"Jul 7"}
              time={"6"}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <TrendingPost
              number={"04"}
              image={user4}
              author={"PCMag"}
              title={"Ingenuity Mars Helicopter Smashes Records on Ninth Flight"}
              date={"Jul 7"}
              time={"2"}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <TrendingPost
              number={"05"}
              image={user5}
              author={"Reinoud Schuijers"}
              title={"Essential CSS concepts every designer should know"}
              date={"Jul 7"}
              time={"7"}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <TrendingPost
              number={"06"}
              image={user6}
              author={"Rowan Kavner"}
              title={"Roster moves: Dodgers add RHP Jake Reed, recall LHP Garrett Cleavinger"}
              date={"Jul 7"}
              time={"7"}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Trending;