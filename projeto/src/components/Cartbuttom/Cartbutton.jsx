import React from 'react'
import './Cartbutton.scss'
import {setCart} from '../../store/reducers/Navreducers/action'
import {useSelector,useDispatch} from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
const Cartbutton = () => {
  const dispatch = useDispatch();
  const {quantity} = useSelector(store => store.cartReducer)
  const onClickCart = (e) => { 
    dispatch(setCart())
  }    
  return (
    <button className = "topbar__icon" onClick = {(e) => onClickCart()}>
      <a  href = "#"className = "topbar__icon--cart" >
         <FontAwesomeIcon icon = {faShoppingCart} className = "cart-icon"/>    
         <span className="my-cart-badge"> {quantity} </span>
      </a>
    </button>
  )}

export default Cartbutton