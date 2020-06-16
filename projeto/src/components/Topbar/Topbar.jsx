import React from 'react';
import './Topbar.scss'
import Cartbutton from '../Cartbuttom/Cartbutton'
import { Link } from 'react-router-dom';
import {setSearch} from'../../store/reducers/Navreducers/action'
import {useDispatch} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from "@fortawesome/free-solid-svg-icons"

const Topbar = () => {
  const dispatch = useDispatch()
    const handleSearch = () => {
         dispatch(setSearch())
    }
    return (
    <nav className ="topbar">
      <div className = "topbar__container">
          <Link to = "/" className = "topbar__logo">
             <span>FASHIONISTA</span>
          </Link>
        <div className = "topbar__group"> 
          <button className = "topbar__icon" onClick = {(e) => handleSearch()}>
            <FontAwesomeIcon icon = {faSearch}/>    
          </button>   
          <Cartbutton />
        </div>  
      </div>
    </nav>
    )
}
export default Topbar;