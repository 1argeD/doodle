/* eslint-disable*/
import React from 'react';
import Main from '../src/pages/main';
import Canvas from '../src/pages/Canvas';
import NotFound from '../src/pages/NotFound';
import Login from '../src/pages/login'
import Signup from '../src/pages/SighnUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
        return (
                <div className='App'>
                      <BrowserRouter>
                            <Routes>
                                  <Route path="/" element={<Main />}></Route>
                                  <Route path="/canvas/*" element={<Canvas />}></Route>
                                  <Route path="/login" element={<Login />}></Route>
                                  <Route path="/signup" element={<Signup />}></Route>
                                  <Route path='/login'></Route>
                                  <Route path="*" element={<NotFound />}></Route>
                            </Routes>
                      </BrowserRouter>
                </div>
              );           
};

export default App;
