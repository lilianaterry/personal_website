import React from "react";
import NavigationBar from "./NavigationBar";
import "../global.css";
import IndexImageContainer from "./IndexImageContainer";
import "./index_image.css";
import recipesData from "../data/recipesData";

function Index() {
  return (
    <div className="page-container">
      <NavigationBar />
      <div className="content">
        <div className="image-gallery">
          {recipesData.map((recipe) => (
            <IndexImageContainer
              key={recipe.id} // Ensure each component has a unique key
              src={recipe.imageSrc}
              description={recipe.description}
              to={`/recipes/${recipe.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
