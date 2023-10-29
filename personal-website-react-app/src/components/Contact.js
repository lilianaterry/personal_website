import React from "react";
import NavigationBar from "./NavigationBar"; // Import the NavigationBar component
import "../global.css";

function Contact() {
  return (
    <div className="page-container">
      <NavigationBar /> {/* Include the NavigationBar */}
      <div className="content">Contact Page Content</div>
    </div>
  );
}

export default Contact;
