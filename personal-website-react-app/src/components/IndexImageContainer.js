import React from "react";
import { Link } from "react-router-dom";
import "./index_image.css";

function IndexImageContainer({ src, description, className, to }) {
  return (
    <div className="index-image-container">
      <Link to={to}>
        <img src={src} alt={description} className={className} />
      </Link>
    </div>
  );
}

export default IndexImageContainer;
