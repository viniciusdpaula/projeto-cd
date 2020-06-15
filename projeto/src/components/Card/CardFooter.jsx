import React from 'react'


const CardFooter = () => {
    <div className = "card__Footer">
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
}
export default CardFooter