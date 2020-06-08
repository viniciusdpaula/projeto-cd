import React from 'react';
import './Card.scss'
import CardFooter from '../CardFooter/CardFooter'
const Card = ({product}) => {
  const {name , image, discount_percentage,actual_price,on_sale,regular_price,installments} = product
  return (
       <div className = "card">
          <div className = "card-image">
              <img src = {image} />
              {discount_percentage !== "" && 
              <div className = "discount">
               <span>{discount_percentage} OFF</span>
              </div>}
              <i className="fa fa-cart-plus"/> 
          </div>
         <div className = "Footer">
            <span className = "Footer__tittle"> {name}</span>
            <div className = 'price'> 
               {on_sale &&  
               <span className = "regular__price">
                  {regular_price}
               </span>
               }
              <span className = "actual__price"> {actual_price} </span>
            </div>  
            <span className = "installments">{installments} </span>            
         </div>

       </div>
    )
}

export default Card