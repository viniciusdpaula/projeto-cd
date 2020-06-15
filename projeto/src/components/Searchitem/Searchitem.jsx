import React from 'react'
import { Link } from 'react-router-dom';
import './Searchitem.scss'
import  {useDispatch} from 'react-redux'
import {closeSearch} from '../../store/reducers/Navreducers/action'
export const Searchitem = ({item}) => { 
    const dispatch = useDispatch()
    const handleAction = (e) => { 
          dispatch(closeSearch())
    } 
    return (
    <Link to = {`/product/${item.code_color}`} className = "search__item" 
    onClick ={(e) => handleAction(e)} >
        <div className ="search__item__image">
          <img src = {item.image} alt = "holder"/>
        </div>
        <div className = "search__item__info">
          <span className = "search__item__info__name">{item.name}</span>
          <span className = "search__item__info__price">{item.actual_price} </span>
        </div>
     </Link>          
    )
}
export default Searchitem