import React, { useState,useEffect } from 'react';
import './Topbar.scss'
import Cart from '../Cartbuttom/Cart'
import {ReactComponent as LogoSvg} from '../../assets/Fashionista_logo_small2.svg';
const Topbar = () => {
    return (
    <nav className = "topbar">
      <div className = "container">
        <div>
          <a href = "/" className = "topbar__logo">
             <LogoSvg alt  = 'Logo'/>
          </a>
        </div> 
     <div className = "topbar__group">
         <input/>
         <button className = "topbar__icon">
           <a className = "topbar__icon">
             <i className="fa fa-search"/>
           </a>
          </button>  
          <Cart/>
        </div>
     </div>
    </nav>
    )
}
export default Topbar;