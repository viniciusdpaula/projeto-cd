import React, { useState,useEffect } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar/Topbar'
const App = () => {
  return (
    <div className="App">
      <Topbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>
  );
}

export default App;
