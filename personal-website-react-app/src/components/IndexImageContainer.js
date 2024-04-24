import React from "react";
import { Link } from "react-router-dom";
import "./index_image.css";
import ImageHoverFade from "./ImageHoverFade";

function IndexImageContainer({ src, hoverSrc, description, className, to }) {
  return (
    <div className="index-image-container">
      <Link to={to}>
        <ImageHoverFade
          normalImageSrc={src}
          hoveredImageSrc={hoverSrc}
          alt={description}
        />
      </Link>
    </div>
  );
}

export default IndexImageContainer;
