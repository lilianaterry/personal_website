import "./global.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Index from "./components/Index";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Contribute from "./components/Contribute";

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
