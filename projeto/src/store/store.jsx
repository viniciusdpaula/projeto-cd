import {createStore} from 'redux'
import  reducers from './roootReducer'
const reducer = reducers
const store = createStore(reducer);

export default store