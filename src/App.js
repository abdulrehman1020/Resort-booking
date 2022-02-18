import React from 'react';
import './App.css';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// IMPORT PAGES
import Home from './pages/Home';
import Rome from './pages/Rome';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room" element={<Rome />} />
      <Route path="/room/:slug" element={<SingleRoom />} />
      <Route path="*" element={<Error />} />
    </Routes>
  
    </>
  );
}

export default App;
