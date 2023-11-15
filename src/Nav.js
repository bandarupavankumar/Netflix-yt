import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav({onclick}) {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          // src="https://w7.pngwing.com/pngs/366/864/png-transparent-netflix-logo-illustration-netflix-streaming-media-television-show-logo-netflix-logo-television-text-trademark-thumbnail.png"
          alt="First Image Alt Text"
        />
        <img
          className="nav__avatar"
          src="https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png"
          alt="Second Image Alt Text"
        />
        
      </div>
    </div>
  );
}

export default Nav;
