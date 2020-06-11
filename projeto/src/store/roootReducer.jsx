import {homeReducer} from '../pages/Home/reducer'
import {searchReducer} from '../components/Topbar/reducer'
import {cartReducer} from '../components/Cartbuttom/reducer'
import {combineReducers} from 'redux'
import {productReducer} from './reducers/product/productReducer'
const reducers = combineReducers({
    homeReducer,
    searchReducer,
    cartReducer,
    productReducer
});

export default reducers;