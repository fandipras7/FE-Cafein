import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "../../pages/main";
import Landingpage from "../../pages/landingPage/landingPage";
import ProfilePekerja from "../../pages/profilePekerja/pekerjaProfile";
import EditPekerja from "../../pages/editProfilePekerja/EditPekerja";
import Hire from "../../pages/hire/Hire";
import Home from "../../pages/main/home/home";
import Login from "../../pages/auth/login";
import RegisterUser from "../../pages/auth/registerUser";
import RegisterCompany from "../../pages/auth/registerCompany";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registerUser" element={<RegisterUser />} />
        <Route exact path="/registerCompany" element={<RegisterCompany />} />
        <Route exact path="/landing" element={<Landingpage />} />
        <Route exact path="/pekerja" element={<ProfilePekerja />} />
        <Route exact path="/editPekerja" element={<EditPekerja />} />
        <Route exact path="/hire" element={<Hire />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
