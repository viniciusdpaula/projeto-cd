import React, { useState,useEffect } from 'react';
import './Topbar.scss'
import Cartbutton from '../Cartbuttom/Cartbutton'
import { Link } from 'react-router-dom';
import {searchUpdate} from'./action'
const Topbar = () => {
    const handleChange = (value) => {
      searchUpdate(value)
    }
    return (
    <nav className = "topbar">
      <div className = "container">
          <Link to = "/" className = "topbar__logo" >
             <span>FASHIONISTA</span>
          </Link>
        <div className = "topbar__group">
          
            <i className="fa fa-search"/>
            {/* <input  
            type = "text"
            className = "input__bar"
            placeholder = "O que você procura ?"
            onChange = {(e) => handleChange(e.target.value)}
            /> */}
         
          <Cartbutton />
        </div>  
      </div>
    </nav>
    )
}
export default Topbar;