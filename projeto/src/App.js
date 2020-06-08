import React, { useState,useEffect } from 'react';
import './App.css';
import Topbar from './components/Topbar/Topbar'
import Routes from './routes/index'
import { BrowserRouter } from 'react-router-dom';
const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Topbar/>
        <Routes/> 
      </BrowserRouter>     
    </div>
  );
}

export default App;
