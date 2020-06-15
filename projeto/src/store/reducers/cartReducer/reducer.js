import {cart_format,calc_price, calc_qt} from '../../../utils/cartFunc'
import {change_cart_amount} from '../../../utils/changeAmount'


const INITIAL_STATE = {
    show: false,
    cart:[],
    subtotal:0,
    quantity:0
}


export function cartReducer(state  = INITIAL_STATE,action) {
    switch (action.type) {
        case 'CART_CLICK':
            return {
                ...state,
                show: action.payload
            }
        case 'OVERLAY_CLICK':
            return {
                ...state,
                show:false  
            }
        case 'ADD_TO_CART':
               const cart_aux = cart_format(state.cart,action.payload) 
            return { 
                ...state,
                cart:cart_aux, 
                subtotal:calc_price(cart_aux),
                quantity:calc_qt(state.cart)
            }                       
        case 'CHANGE_AMOUNT':
            return { 
                ...state,
                cart:change_cart_amount(state.cart,action.payload),
                subtotal:calc_price(state.cart),
                quantity:calc_qt(state.cart)
            }    
        case 'DELETE_ITEM':
            state.cart.splice(action.payload,1)
            return { 
                ...state,
                cart:state.cart,
                subtotal:calc_price(state.cart),
                quantity:calc_qt(state.cart)

            }    
        case 'RESET_CART':
            return {
                show: false,
                cart:[],
                subtotal:0,
                quantity:0
            }
        default :
           return state    
    }
}
