import React from "react";
import { NavLink } from "react-router-dom";

//Navigation menu
export default function Nav() {
  return (
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
}
