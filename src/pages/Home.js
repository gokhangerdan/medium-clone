import { Button, Container, Grid } from "@material-ui/core";

import Navigation from '../components/Navigation';
import Hero from '../components/Hero.js';
import Trending from "../components/Trending";

import user from "../static/user.png"
import image from "../static/image.jpg"
import bookmark from "../static/bookmark.svg"


function Home() {
  
    return (
      <div>
        <Navigation />
        <Hero />
        <Trending />
        <div>
          <Container>
            <div>
              <div>
                <img src={user} />
                <h4>Dr. Derek Austin</h4>
              </div>
              <h2>Kent C. Dodd’s .filter() Trick Will Change How You Use JavaScript</h2>
              <div>
                <h3>This one-liner uses the Boolean constructor to magically remove all falsy values from an array ✨</h3>
              </div>
              <div>
                <div>
                <span>Jun 28 &nbsp;· &nbsp;3 min read &nbsp;· &nbsp;</span>
                <span>JavaScript</span>
                <img src={bookmark} />
                </div>
              </div>
            </div>
            <img src={image} />
          </Container>
        </div>
      </div>
    );
  }
  
  export default Home;