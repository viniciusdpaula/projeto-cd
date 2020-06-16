export function setLoading(loading){
    return {
        type: 'LOADING',
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
