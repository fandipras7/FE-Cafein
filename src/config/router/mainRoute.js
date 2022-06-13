import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../../pages/main/home/home";
import Login from '../../pages/auth/login'
import RegisterUser from "../../pages/auth/registerUser";
import RegisterCompany from "../../pages/auth/registerCompany";

function App() {
    return (
        <BrowserRouter>
            <Routes>  
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/registerUser" element={<RegisterUser/>}/>
                <Route exact path="/registerCompany" element={<RegisterCompany/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;