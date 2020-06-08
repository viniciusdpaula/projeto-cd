import React, { useState,useEffect } from 'react';
import './Topbar.scss'
import Cart from '../Cartbuttom/Cart'
import {ReactComponent as LogoSvg} from '../../assets/Fashionista_logo_small2.svg';
import { Link } from 'react-router-dom';
const Topbar = () => {
    return (
    <nav className = "topbar">
      <div className = "container">
          <Link to = "/" className = "topbar__logo">
             <LogoSvg alt  = 'Logo'/>
          </Link>
        <div className = "topbar__group">
          <div className =  "input__topbar">
            <i className="fa fa-search"/>
            <input type = "text"placeholder = "O que você procura ?"/>
          </div>   
          <Cart/>
        </div>
      </div>
    </nav>
    )
}
export default Topbar;