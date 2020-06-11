import React from 'react'
import './Cartbutton.scss'
import {cartClick} from './action'
import {useSelector,useDispatch} from 'react-redux';
const Cartbutton = () => {
  const dispatch = useDispatch();
  const {show,amount} = useSelector(store => store.cartReducer)
  const onClickCart = (e) => { 
    dispatch(cartClick(show))
  }    
  return (
    <button className = "topbar__icon" onClick = {(e) => onClickCart()}>
      <a  href = "#"className = "topbar__icon--cart" >
         <i className="fa fa-shopping-cart"/>
         <span className="my-cart-badge">{amount} </span>
      </a>
    </button>
  )}

export default Cartbutton