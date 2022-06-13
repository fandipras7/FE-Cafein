import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "../../pages/main";
import Landingpage from "../../pages/landingPage/landingPage";
import ProfilePekerja from "../../pages/profilePekerja/pekerjaProfile";
import EditPekerja from "../../pages/editProfilePekerja/EditPekerja";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/landing" element={<Landingpage />} />
        <Route exact path="/profilePekerja" element={<ProfilePekerja />} />
        <Route exact path="/editPekerja" element={<EditPekerja />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
