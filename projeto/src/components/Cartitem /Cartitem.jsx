import React from 'react'
import './Cartitem.scss'
import {useSelector,useDispatch} from 'react-redux'
import {changeAmount} from '../Cartbuttom/action'
const Cartitem = () => {
  const {cart} = useSelector(store => store.cartReducer)
  const {amount} = useSelector(store => store.cartReducer)
  const dispatch = useDispatch()
  console.log(cart)
  const setAction = (value) => { 
      dispatch(changeAmount(value,amount))
  }
    return (
        <div className = "item">
        <div className = "item__delete">
          <i class="fa fa-trash"/>  
        </div>
        <div className ="item__image">
          <img src = {cart[0].image} alt = "holder"/>
        </div>
        <div className = "item__info">
          <span className = "item__info__name">{cart[0].name}</span>
          <span className = "item__info__tam">{cart[0].size}</span>
        </div>
        <div>
          <button type = "minus"className = "item__amout__button" 
            onClick = {(e) => setAction('minus')}>
             <i class="fa fa-minus-square"/>
          </button>
          <span className = "item__amout--cart"> 
           {amount}
          </span>
          <button className = "item__amout__button"
           onClick = {(e) => setAction('plus')} >
             <i class="fa fa-plus-square"/>
          </button>
        </div>
        <div className = "item__price"> {cart[0].actual_price} </div>
     </div>          
    )
}
export default Cartitem;