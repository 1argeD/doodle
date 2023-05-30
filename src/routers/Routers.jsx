import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "../pages/main";
import Canvas from "../pages/Canvas";
import NotFound from "../pages/NotFound";
import Login from "../pages/login";
import Signup from "../pages/SignUp";


const Routers = () => {
    return (
        <BrowserRouter>
              <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/canvas/*" element={<Canvas />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign" element={<Signup />} />
                    <Route path="*" element={<NotFound />} />
              </Routes>
        </BrowserRouter>
    );
};
export default Routers;