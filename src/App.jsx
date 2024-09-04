import React from "react";
import Home from "./home";
import Theme from "./Theme";
import Quiz from "./quiz";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/theme" element={<Theme />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
