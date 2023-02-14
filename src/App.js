/* eslint-disable*/
import React from 'react';
import Header from '../src/components/GlobalHeader';
import Main from '../src/pages/main';
import Canvas from '../src/pages/Canvas';
import NotFound from '../src/pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
        return (
                <div className='App'>
                      <BrowserRouter>
                            <Header />
                            <Routes>
                                  <Route path="/" element={<Main />}></Route>
                                  <Route path="/canvas/*" element={<Canvas />}></Route>
                                  <Route path="*" element={<NotFound />}></Route>
                            </Routes>
                      </BrowserRouter>
                </div>
              );           
};

export default App;
