import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Animation from "./pages/Animation";

const App = () => {
  return (
    <BrowserRouter basename={"/Portfolio"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animation3D" element={<Animation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

