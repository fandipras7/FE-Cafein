import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "../../pages/main";
import Landingpage from "../../pages/landingPage/landingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/landing" element={<Landingpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
