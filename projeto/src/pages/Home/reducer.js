const INITIAL_STATE = {
    products: {},
    loading:false
}
export  function homeReducer(state  = INITIAL_STATE,action) { 
    switch (action.type) {
        case 'GET_PRODUCTS':{
          return {
            products: action.payload,
            loading: false
            };
        }             
        case 'LOADING': {
            return {
                ...state,
                loading:true
            };
        }
        default:
          return state;
    }
}
export default homeReducer;