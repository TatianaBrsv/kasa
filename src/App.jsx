import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeWrapper from "./components/HomeWrapper";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import CardOpen from "./pages/CardOpen";
import Error from "./components/Error";
import ErrorId from "./components/ErrorId";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/route/:id" element={<HomeWrapper />} />
        <Route path="/" element={<Home />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/card/:id" element={<CardOpen />} />
        <Route path="*" element={<Error />} />
        <Route path="/error-id" element={<ErrorId />} />
      </Routes>
    </Router>
  );
};

export default App;
