import {cart_inside} from '../../utils/cartFunc'
import { stat } from 'fs'
const INITIAL_STATE = {
    show: false,
    cart:[],
    amount:0,
    subtotal:0,
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
        case 'CHANGE_AMOUNT':
            return { 
                ...state,
                amount:action.payload
            }
        case 'ADD_TO_CART':
               const cart_aux = cart_inside(state.cart,action.payload)
            return { 
                ...state,
                cart:cart_aux 
            }                       
        default:
            return state;
    }
}