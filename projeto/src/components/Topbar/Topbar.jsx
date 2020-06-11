import React from 'react';
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
      <div className = "topbar__container">
          <Link to = "/" className = "topbar__logo">
             <span>FASHIONISTA</span>
          </Link>
        <div className = "topbar__group"> 
          <a className = "topbar__icon">
            <i className="fa fa-search"/>    
          </a>   
            <Cartbutton />
        </div>  
      </div>
    </nav>
    )
}
export default Topbar;