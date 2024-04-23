import React from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import "../global.css";

function RecipeDetailPage({ recipes }) {
  const { recipeId } = useParams();
  const recipe = recipes.find((r) => r.id === recipeId);

  console.log("recipes:", recipes);
  console.log(recipeId);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const {
    title,
    subtitle,
    description,
    imageSrc,
    condition,
    parts,
    ph,
    ratio,
    temp,
    extractTime,
    dyeTime,
  } = recipe;

  console.log("Image Source:", imageSrc);
  console.log("recipes:", recipes);
  console.log("found recipe:", recipe);

  const TwoColumnLayout = ({ leftText, rightText }) => {
    const containerStyle = {
      display: "flex",
      marginBottom: "8px",
    };

    const leftColumnStyle = {
      width: "120px", // Adjust the width of the left column as needed
      textAlign: "right",
      marginRight: "18px",
      fontWeight: "bold",
    };

    return (
      <div style={containerStyle}>
        <span style={leftColumnStyle}>{leftText}:</span>
        <span>{rightText}</span>
      </div>
    );
  };

  return (
    <div className="page-container">
      <NavigationBar />
      <div className="content">
        <h1>{title}</h1>
        <h3 style={{ fontStyle: "italic" }}>{subtitle}</h3>
        <img src={imageSrc} alt={title} style={{ width: "30%" }} />
        <p></p>

        <TwoColumnLayout leftText="CONDITION" rightText={condition} />
        <TwoColumnLayout leftText="PARTS" rightText={parts} />
        <TwoColumnLayout leftText="pH" rightText={ph} />
        <TwoColumnLayout leftText="RATIO" rightText={ratio} />
        <TwoColumnLayout leftText="TEMP" rightText={temp} />
        <TwoColumnLayout leftText="EXTRACT TIME" rightText={extractTime} />
        <TwoColumnLayout leftText="DYE TIME" rightText={dyeTime} />

        <p>{description}</p>
      </div>
    </div>
  );
}

export default RecipeDetailPage;

// |||||Condition:||fresh
// |||||||||Parts:||yes
