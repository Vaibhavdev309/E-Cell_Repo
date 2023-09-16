import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import Portfolio from "./routes/Portfolio.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
