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
           {item.image ?   <img className = "card__image-wraper"src = {item.image} alt = "product"/>
            :<img src = 'https://dummyimage.com/300x379.15/ffffff/f7f7f7.png&text=/' alt = "holder"/>}
        </div>
        <div className = "search__item__info">
          <span className = "search__item__info__name">{item.name}</span>
          <span className = "search__item__info__price">{item.actual_price} </span>
        </div>
     </Link>          
    )
}
export default Searchitem