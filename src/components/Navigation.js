import React, { useEffect, useState } from "react";
import { Button, Container, Grid } from "@material-ui/core";

import logo from '../static/logo.svg';


function Navigation() {

  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, []);
  
  return (
    <div className={`Navigation ${active && "active"}`}>
      <Container>
        <div className="Navigation_Container">
          <a href="/"><img
            src={logo}
            alt=""
          /></a>

          <div className="Navigation_Links">
            <ul>
              <li className="Navigation_Link_Mobile">Our Story</li>
              <li className="Navigation_Link_Mobile">Membership</li>
              <li className="Navigation_Link_Mobile">Write</li>
              <li className="Navigation_Link_Mobile">Sign In</li>
              <li>
                <Button>Get Started</Button>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
  
export default Navigation;