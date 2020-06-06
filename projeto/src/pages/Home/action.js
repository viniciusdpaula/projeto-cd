export function setLoading(){
    return {
        type: 'LOADING'
    };
}
export function getProducts(products){
    return {
        type: 'GET_PRODUCTS',
        payload: products
    }
}