import {homeReducer} from '../pages/Home/reducer'
import {searchReducer} from '../components/Topbar/reducer'
import {cartReducer} from '../components/Cartbuttom/reducer'
import {combineReducers} from 'redux'

const reducers = combineReducers({
    homeReducer,
    searchReducer,
    cartReducer
});

export default reducers;