
export const  setSize  = (size) => { 
    return { 
        type:"SET_SIZE",
        payload:size
    }
}
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
        action:location
   }
}