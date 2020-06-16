import React  from'react' 
import './Cart.scss'
import {resetCart} from '../../store/reducers/cartReducer/action'
import {setCart} from '../../store/reducers/Navreducers/action'
import {useSelector,useDispatch} from 'react-redux'; 
import Cartitem from '../Cartitem /Cartitem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from "@fortawesome/free-solid-svg-icons"



const Cart = () => {  
   const {cart,subtotal} = useSelector(store => store.cartReducer)
   const dispatch = useDispatch()  
   const close = () => { 
     dispatch(setCart())
    }
    const setDeleteAll = ()=> { 
        dispatch(resetCart())
   } 
  return (
    <div className="sidebar">
       <div className = "sidebar__top"> 
         <button className ="sidebar__top__close" onClick = {(e) => close()}>
           <FontAwesomeIcon icon = {faTimes}/>
         </button>
         <div class="sidebar__top__tittle">
           Shopping Bag
         </div>
       </div>
       <div className = "sidebar__content">
          <div className = "sidebar__items">       
              { cart.map((item,index) => { 
            return ( 
            <Cartitem item = {item} id = {index} />
            )
          }
          )
          }
          </div>
        </div>  
        <div className = "cart__buttons--finish" onClick = {(e) => setDeleteAll()}>
              <span> TOTAL: R$ {subtotal}</span>
        </div>
    </div>
  )
}


export default Cart