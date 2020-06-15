import {getUrl} from '../../utils/getUrl'
export function getProduct(code){
    return {      
        type: 'GET_PRODUCT_INFO',
        payload: code
    }
}
export function addtoCart(SingleProduct,size,amount) { 
    return {
        type:'ADD_TO_CART',
        payload:[SingleProduct,size,amount]
    }
}
export function setUrl(location) { 
   return { 
        type:'SET_URL',
        action:getUrl(location)
   }
}
export default addtoCart