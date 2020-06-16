import React from 'react';
import './Card.scss'
import { Link } from 'react-router-dom';
import CardFooter from './CardFooter'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"
import {getProduct} from '../../store/reducers/product/action'
import  {useDispatch} from 'react-redux'
const Card = ({product,value}) => {
  const dispatch = useDispatch()
  function handleChange(value) { 
    dispatch(getProduct(value))
  }
  return (        
       <div className = "card">
          <div className = "card__image">
             <Link to = {`/product/${product.code_color}`}  onClick = {() => handleChange(value)}>
              {product.image.length > 0 ?
                <img className = "card__image-wraper"src = {product.image} alt = "product"/>
                : <img src = 'https://dummyimage.com/300x379.15/ffffff/f7f7f7.png&text=/' alt = "holder"/>
                }
                <FontAwesomeIcon className = "card__image__icon" icon ={faCartPlus}/>  
              </Link>  
              {product.discount_percentage !== "" && 
              <div className = "card__discount">
               <span>{product.discount_percentage} OFF</span>
              </div>
              }
              <Link to = {`/product/${product.code_color}`}>
              </Link>
              <CardFooter 
                  name ={product.name} 
                  on_sale = {product.on_sale}  
                  installments = {product.installments}
                  regular_price = {product.regular_price}
                  actual_price = {product.actual_price}
               />
          </div>
       </div>
    )
}

export default Card