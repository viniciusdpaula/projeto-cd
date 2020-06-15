import {createStore} from 'redux'
import  roootReducer, {reducers} from './roootReducer'
import { cartReducer } from './reducers/cartReducer/reducer'
const reducer = reducers

function loadSaveState() {
    try { 
        const saveState = localStorage.getItem('state')
        if (saveState === null) return undefined
        return JSON.parse(saveState)
    }
    catch(e){
    console.log(e)
    return undefined
    }
}

function saveToLocalStorage(state) { 
    try { 
        const saveState = JSON.stringify(state)
        localStorage.setItem('state',saveState)
    }
    catch(e) { 
        console.log(e)
    }
}

export const  persistedState = loadSaveState() 


const store = createStore(reducer,persistedState);


store.subscribe(() => saveToLocalStorage(store.getState(cartReducer)))


export default store