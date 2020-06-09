import React, { useState } from 'react'
import './Cartbutton.scss'
import Cart from '../Cart/Cart'
import {cartClick} from './action'
import {useSelector,useDispatch} from 'react-redux';
const Cartbutton = () => {
  const dispatch = useDispatch();
  const {show} = useSelector(store => store.cartReducer)
  console.log(show)
  const onClickCart = (e) => { 
    dispatch(cartClick(show))
  }    
  return (
    <button className = "topbar__icon" onClick = {(e) => onClickCart()}>
      <a  className = "topbar__cart" >
         <i className="fa fa-shopping-cart"/>
         <span className="my-cart-badge">0</span>
      </a>
      {/* {visible ?
       <Cart  /> 
      : null} */}
    </button>
  )}

export default Cartbutton