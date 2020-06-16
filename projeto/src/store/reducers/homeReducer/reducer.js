import {filterByCode,findItem,findSizes} from '../../../utils/filters'
const INITIAL_STATE = {
    products: {},
    loading:true,
    SingleProduct:{},
    sizes: [],
    search_array:[]
}
export   function homeReducer(state  = INITIAL_STATE,action) { 
    switch (action.type) {
        case 'GET_PRODUCTS':{
          return {
            ...state,
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
            return { 
                ...state,
                SingleProduct:single,
                sizes: findSizes(single)
            }
        }
        case 'SEARCH_UPDATE': { 
           const findArray = findItem(state.products,action.payload)
           return { 
               ...state,
               search_array:findArray
           }
        }
        default:
          return state;
    }
}
export default homeReducer;