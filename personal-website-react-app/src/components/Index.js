import React from "react";
import NavigationBar from "./NavigationBar";
import "../global.css";

function Index() {
  return (
    <div className="page-container">
      <NavigationBar />
      <div className="content">Index Page Content</div>
    </div>
  );
}

export default Index;
