import {filterByCode} from '../../utils/filterByCode'
const INITIAL_STATE = {
    products: {},
    loading:false,
    SingleProduct:{},
    sizes: []

}
export   function homeReducer(state  = INITIAL_STATE,action) { 
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
                loading:action.payload
            };
        }
        case 'GET_PRODUCT_INFO': {
            const single = filterByCode(state.products,action.payload)  
            const single_sizes = single.sizes
            return { 
                ...state,
                SingleProduct:single,
                sizes:single_sizes
            }
        }
        default:
          return state;
    }
}
export default homeReducer;