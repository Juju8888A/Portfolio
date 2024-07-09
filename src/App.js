import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<About />} />
        <Route path="/" element={<Skills />} />
        <Route path="/" element={<Achievements />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

