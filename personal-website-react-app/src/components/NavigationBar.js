import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  const navStyle = {
    listStyle: "none", // Remove bullet points
    textAlign: "right", // Right-align the list
  };

  return (
    <nav>
      <ul style={navStyle}>
        <li>
          <Link to="/">Index</Link>
        </li>
        <li>
          <Link to="/process">Process</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/contribute">Contribute</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
