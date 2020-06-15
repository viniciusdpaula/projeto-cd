import React from 'react'
import './Cartitem.scss'
import {useDispatch} from 'react-redux'
import {deleteItem} from '../../store/reducers/cartReducer/action'
import Amountbuttom from '../Amountbuttom/Amountbuttom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from "@fortawesome/free-solid-svg-icons"


const Cartitem = ({item,id}) => {
  
  const dispatch = useDispatch()
  const setDelete = (e) => { 
    e.preventDefault()
      dispatch(deleteItem(id))
  }

    return (
      <div className = "item">
        <div className ="item__image">
          <img src = {item.image} alt = "holder"/>
          <div className = "item--delete" onClick = {(e) => setDelete(e)}>
          <FontAwesomeIcon icon ={faTrash}  />  
        </div>
        </div>
        <div className = "item__info">
          <span className = "item__info--name">{item.name}</span>
          <span className = "item__info--tam">{item.size}</span>
        </div>
        <Amountbuttom item = {item} />
        <div className = "item__info--price"> {item.actual_price} </div>
     </div>          
    )
}
export default Cartitem;