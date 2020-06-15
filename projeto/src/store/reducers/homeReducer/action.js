export function setLoading(){
    return {
        type: 'LOADING',
        payload:true
    };
}
export function getProducts(products){
    return {
        type: 'GET_PRODUCTS',
        payload: products
    }
}    
export function searchValue(name) { 
    return { 
        type: 'SEARCH_UPDATE',
        payload:name
    }
}    
