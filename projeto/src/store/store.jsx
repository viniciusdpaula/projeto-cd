import {createStore} from 'redux'
import homeReducer from '../pages/Home/reducer'


const store = createStore(homeReducer);

export default store