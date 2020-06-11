import {cart_format} from '../../utils/cartFunc'
export function getProduct(code){
    return {      
        type: 'GET_PRODUCT_INFO',
        payload: code
    }
}
export function addtoCart(SingleProduct,size) { 
    return {
        type:'ADD_TO_CART',
        payload:cart_format(SingleProduct,size)
    }
}
export default addtoCart