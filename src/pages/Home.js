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
        <DiscoverPost />
      </div>
    );
  }
  
  export default Home;