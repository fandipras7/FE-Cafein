import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "../../pages/main";
import Landingpage from "../../pages/landingPage/landingPage";
import ProfilePekerja from "../../pages/profilePekerja/pekerjaProfile";
import DetailProfile from "../../pages/detailPekerja";
import EditPekerja from "../../pages/editProfilePekerja/EditPekerja";
import Hire from "../../pages/hire/Hire";
import Home from "../../pages/main/home/home";
import Login from "../../pages/auth/login";
import RegisterUser from "../../pages/auth/registerUser";
import RegisterCompany from "../../pages/auth/registerCompany";
import CompanyProfile from "../../pages/main/companyProfile/companyProfile";
import EditCompany from "../../pages/main/editCompanyProfile/editCompany";
import PrivateRoot from "../../components/Base/privateroot";
import History from "../../pages/history/history";
import RecruiterProfile from "../../pages/main/recruiterProfile/recruiterProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/home"
          element={
            <PrivateRoot>
              <Home />
            </PrivateRoot>
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registerUser" element={<RegisterUser />} />
        <Route exact path="/registerCompany" element={<RegisterCompany />} />
        <Route exact path="/" element={<Landingpage />} />
        <Route exact path="/History" element={<History />} />
        <Route exact path="/recruiterProfile/:id" element={<RecruiterProfile />} />
        <Route
          exact
          path="/profilePekerja"
          element={
            <PrivateRoot>
              <ProfilePekerja />
            </PrivateRoot>
          }
        />
        <Route
          exact
          path="/detailPekerja/:id"
          element={
            <PrivateRoot>
              <DetailProfile />
            </PrivateRoot>
          }
        />
        <Route
          exact
          path="/editPekerja"
          element={
            <PrivateRoot>
              <EditPekerja />
            </PrivateRoot>
          }
        />
        <Route
          exact
          path="/companyProfile"
          element={
            <PrivateRoot>
              <CompanyProfile />
            </PrivateRoot>
          }
        />
        <Route
          exact
          path="/editCompany"
          element={
            <PrivateRoot>
              <EditCompany />
            </PrivateRoot>
          }
        />
        <Route
          exact
          path="/hire"
          element={
            <PrivateRoot>
              <Hire />
            </PrivateRoot>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
