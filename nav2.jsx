import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-container">
        <a href="/">
          <h1>My Site</h1>
        </a>

        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active" className="normal">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="normal"
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
