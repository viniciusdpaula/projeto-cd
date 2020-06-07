import React from 'react';
import './Card.scss'

const Card = ({product}) => {
const {name , image, discount_percentage} = product
  return (
       <div className = "card">
          <div className = "card-image">
              <img src = {image} />
              {discount_percentage !== "" && 
           <div className = "discount">
               {discount_percentage}
           </div>} 
          </div>
             
          <div>
             <span> {name}</span>
          </div>

       </div>
    )
}

export default Card