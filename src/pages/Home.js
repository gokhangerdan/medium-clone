import { Button, Container, Grid } from "@material-ui/core";

import Navigation from '../components/Navigation';
import Hero from '../components/Hero.js';

import Trending from "../components/Trending";




function Home() {
  
    return (
      <div>
        <Navigation />
        <Hero />
        <Trending />
      </div>
    );
  }
  
  export default Home;