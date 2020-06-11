import React from'react' 
import './Cart.scss'
import {cartClick} from '../Cartbuttom/action'
import {useSelector,useDispatch} from 'react-redux'; 
import Cartitem from '../Cartitem /Cartitem'
const Cart = () => { 
  const {show,amount,cart} = useSelector(store => store.cartReducer)
  const dispatch = useDispatch()  
  const close = () => { 
    dispatch(cartClick(show))
  } 
  return (
    <div class="shopping-cart">
       <div className = "shopping-cart__top"> 
         <button className ="shopping-cart__close" onClick = {(e) => close()}>
           <i class="fa fa-times"/>
         </button>
         <div class="title">
           Shopping Bag
         </div>
       </div>
       {cart.map((item) => { 
        return ( 
        <Cartitem item = {item} />
        )
       }
       )}
            
    </div>
 )
}
export default Cart