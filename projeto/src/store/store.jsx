import {createStore} from 'redux'
import reducer from './reducers/catalag'


const store = createStore(reducer);

export default store