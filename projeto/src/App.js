import React, { useState,useEffect } from 'react';
import './App.css';
import Topbar from './components/Topbar/Topbar'
import Routes from './routes/index'
const App = () => {

  return (
    <div className="App">
        <Topbar/>
        <Routes/>    
    </div>
  );
}

export default App;
