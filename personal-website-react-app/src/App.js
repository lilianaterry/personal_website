import "./global.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Index from "./components/Index";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Contribute from "./components/Contribute";
import RecipeDetailPage from "./components/RecipeDetailPage";
import recipes from "./data/recipesData"; // Import the recipes array

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route
          path="/recipes/:recipeId"
          element={<RecipeDetailPage recipes={recipes} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
