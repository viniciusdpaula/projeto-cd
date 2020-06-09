import React from 'react';
import './Card.scss'
import { Link } from 'react-router-dom';
const Card = ({product}) => {
  const {name , image, discount_percentage,actual_price,on_sale,regular_price,installments} = product
  return (        
       <div className = "card">
          <div className = "card-image">
             <Link to = "/">
              {image.length > 0 ?
                <img className = "card-image-wraper"src = {image} />
                : <img src = 'https://dummyimage.com/300x379.15/ffffff/f7f7f7.png&text=/'/>
                }
              </Link>  
              {discount_percentage !== "" && 
              <div className = "discount">
               <span>{discount_percentage} OFF</span>
              </div>
              }
              <Link to = "/">
              <i className="fa fa-cart-plus"/> 
              </Link>
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