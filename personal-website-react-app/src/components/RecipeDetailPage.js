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

  const { title, description, imageSrc } = recipe;

  console.log("Image Source:", imageSrc);
  console.log("recipes:", recipes);
  console.log("found recipe:", recipe);

  return (
    <div className="page-container">
      <NavigationBar />
      <div className="content">
        <h1>{title}</h1>
        <img src={imageSrc} alt={title} />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default RecipeDetailPage;
