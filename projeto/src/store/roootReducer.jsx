import {homeReducer} from './reducers/homeReducer/reducer'
import {searchReducer} from './reducers/Navreducers/reducer'
import {cartReducer} from './reducers/cartReducer/reducer'
import {combineReducers} from 'redux'
import {productReducer} from './reducers/product/productReducer'

export const reducers = combineReducers({
    homeReducer,
    searchReducer,
    cartReducer,
    productReducer
});

export default {reducers};