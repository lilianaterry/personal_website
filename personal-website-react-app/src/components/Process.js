import React from "react";
import NavigationBar from "./NavigationBar";
import "../global.css";

function Process() {
  return (
    <div className="page-container">
      <NavigationBar />
      <div className="content">Process Page Content</div>
    </div>
  );
}

export default Process;
