import React, { useState,useEffect } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.css';
import Topbar from './components/Topbar/Topbar'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes/index'
import {getTodos} from './action'
import {useSelector,useDispatch} from "react-redux"
const App = () => {
  const dispath = useDispatch()
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
