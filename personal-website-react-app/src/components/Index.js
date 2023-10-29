import React from "react";
import NavigationBar from "./NavigationBar";
import "../global.css";
import lobsterFinal from "../images/mushrooms/lobster/11_final_materials.jpeg";
import IndexImageContainer from "./IndexImageContainer";
import "./index_image.css";

function Index() {
  return (
    <div className="page-container">
      <NavigationBar />
      <div className="content">
        <div className="image-gallery">
          <IndexImageContainer
            src={lobsterFinal}
            description="wool dyed with lobster mushroom, result purple to pink"
          />
          <IndexImageContainer
            src={lobsterFinal}
            description="wool dyed with lobster mushroom, result purple to pink"
          />
          <IndexImageContainer
            src={lobsterFinal}
            description="wool dyed with lobster mushroom, result purple to pink"
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
