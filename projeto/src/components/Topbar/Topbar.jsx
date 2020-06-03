import React, { useState,useEffect } from 'react';
import './Topbar.scss'
import {ReactComponent as LogoSvg} from '../../assets/Fashionista_logo_small2.svg';
const Topbar = () => {
    return (
    <header className = "topbar">
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
        <button className = "topbar__icon">
          <a  to = "/newusers">
            <i class="fa fa-shopping-cart"/>
          </a>
        </button>
        </div>
     </div>
    </header>
    )
}
export default Topbar;