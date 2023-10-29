import React from "react";
import NavigationBar from "./NavigationBar"; // Import the NavigationBar component
import "../global.css";

function Contribute() {
  return (
    <div className="page-container">
      <NavigationBar /> {/* Include the NavigationBar */}
      <div className="content">Contribute Page Content</div>
    </div>
  );
}

export default Contribute;
