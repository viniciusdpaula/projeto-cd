import React from 'react';
import './Card.scss'
import { Link } from 'react-router-dom';
const Card = ({product}) => {
  return (        
       <div className = "card">
          <div className = "card-image">
             <Link to = {`/product/${product.code_color}`}>
              {product.image.length > 0 ?
                <img className = "card-image-wraper"src = {product.image} alt = "product"/>
                : <img src = 'https://dummyimage.com/300x379.15/ffffff/f7f7f7.png&text=/' alt = "holder"/>
                }
              </Link>  
              {product.discount_percentage !== "" && 
              <div className = "discount">
               <span>{product.discount_percentage} OFF</span>
              </div>
              }
              <Link to = {`/product/${product.name}`}>
                <i className="fa fa-cart-plus"/> 
              </Link>
          </div>
         <div className = "Footer">
            <span className = "item__tittle--footer"> {product.name}</span>
            <div className = 'price'> 
               {product.on_sale &&  
               <span className = "regular__price">
                  {product.regular_price}
               </span>
               }
              <span className = "actual__price--mod"> {product.actual_price} </span>
            </div>  
            <span className = "installments">{product.installments} </span>            
         </div>
       </div>
    )
}

export default Card