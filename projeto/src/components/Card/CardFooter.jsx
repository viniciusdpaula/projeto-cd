import React from 'react'
import './CardFooter.scss'

const CardFooter = ({name,on_sale,regular_price,actual_price,installments}) => (
    <div className = "Footer">
    <span className = "Footer__tittle"> {name}</span>
    <div className = 'Footer__price'> 
       {on_sale &&  
       <span className = "Footer__price__regular">
          {regular_price}
       </span>
       }
      <span className = "Footer__price__actual"> {actual_price} </span>
    </div>  
    <span className = "installments">{installments} </span>            
 </div>
)
export default CardFooter