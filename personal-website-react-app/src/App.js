import "./global.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Index from "./components/Index";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Contribute from "./components/Contribute";

import { fairyDustCursor } from "cursor-effects";
new fairyDustCursor({
  colors: ["#E35A20", "#FCAD8B", "#C9ADA1", "#C99781"],
});

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contribute" element={<Contribute />} />
      </Routes>
    </Router>
  );
}

export default App;
