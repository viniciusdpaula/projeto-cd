import React from 'react'
import './Cart.scss'

const Cart = () => {
    return (
      <button className = "topbar__icon">
       <a  class = "topbar__cart" href = "/newusers">
         <i className="fa fa-shopping-cart"/>
         <span className="my-cart-badge">0</span>
       </a>
     </button>
    )
}
export default Cart