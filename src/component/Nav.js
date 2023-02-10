import React from "react";
import "../App.css";

export default function Nav() {
  return (
    <div id="nav-bar">
      <div id="navbar-left">
        <img src="https://i.pinimg.com/originals/58/91/2b/58912b2e3ad6a279347eebb47751a9c1.png" alt="redbus" />
      </div>
      <div id="navbar-right">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Contact us</a>
      </div>
    </div>
  );
}
