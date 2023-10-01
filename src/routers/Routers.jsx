import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "../pages/Main";
import Canvas from "../pages/Canvas";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import CreateCanvas from "../pages/CreateCanvas";



const Routers = () => {
    
    return (
        <BrowserRouter>
              <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/canvas/*" element={<Canvas />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/create" element={<CreateCanvas/>} />
                    <Route path="*" element={<NotFound />} />
              </Routes>
        </BrowserRouter>
    );
};
export default Routers;