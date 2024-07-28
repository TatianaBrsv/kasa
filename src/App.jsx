import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import CardOpen from "./pages/CardOpen";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/card/:id" element={<CardOpen />} />
      </Routes>
    </Router>
  );
};

export default App;
