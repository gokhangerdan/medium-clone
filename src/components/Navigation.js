import React, { useEffect, useState } from "react";
import { Button, Container } from "@material-ui/core";

import logo from '../static/logo.svg';


function Navigation() {

  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, []);
  
  return (
    <div className={`NavBar ${active && "active"}`}>
      <Container>
        <div className="NavBar_Container">
          <img className="NavBar_Logo"
            src={logo}
            alt=""
          />

          <div className="NavBar_Lists">
            <ul>
              <li>Our Story</li>
              <li>Membership</li>
              <li>Write</li>
              <li>Sign In</li>
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