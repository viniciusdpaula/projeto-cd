import React from 'react'


const CardFooter = ({name,on_sale,regular_price,actual_price,installments}) => (
    <div className = "card__Footer">
    <span className = "item__tittle--footer"> {name}</span>
    <div className = 'price'> 
       {on_sale &&  
       <span className = "regular__price">
          {regular_price}
       </span>
       }
      <span className = "actual__price--mod"> {actual_price} </span>
    </div>  
    <span className = "installments">{installments} </span>            
 </div>
)
export default CardFooter