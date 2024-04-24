// ImageHoverFade.js
import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop type validation

const ImageHoverFade = ({ normalImageSrc, hoveredImageSrc, alt }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={hovered ? hoveredImageSrc : normalImageSrc}
        alt={alt}
        className="image"
      />
    </div>
  );
};

// PropTypes for type checking and validation
ImageHoverFade.propTypes = {
  normalImageSrc: PropTypes.string.isRequired,
  hoveredImageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageHoverFade;
