import React from "react";
import "./index_image.css";

function IndexImageContainer({ src, description, className }) {
  return (
    <div className="index-image-container">
      <img src={src} alt={description} className={className} />
    </div>
  );
}

export default IndexImageContainer;
