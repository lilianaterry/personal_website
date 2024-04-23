import React from "react";
import { NavLink } from "react-router-dom";
import "../global.css";
import "./navigation_bar.css";

import { fairyDustCursor } from "cursor-effects";
new fairyDustCursor({
  colors: ["#E35A20", "#FCAD8B", "#C9ADA1", "#C99781"],
});

function NavigationBar() {
  const navStyle = {
    listStyle: "none", // Remove bullet points
    textAlign: "right", // Right-align the list
  };

  return (
    <div classname="nav-container">
      <nav>
        <ul style={navStyle}>
          <li>
            <NavLink to="/" className="nav-link" activeClassName="active">
              Index
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/process"
              className="nav-link"
              activeClassName="active"
            >
              Process
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contribute"
              className="nav-link"
              activeClassName="active"
            >
              Contribute
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
