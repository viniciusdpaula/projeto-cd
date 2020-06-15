import React from 'react' 
import {useSelector} from 'react-redux'
import Cart from '../Cart/Cart'
import Search from '../Search/Search'
import './Overlay.scss'
const Overlay = () =>  { 
    const {search}= useSelector(store => store.searchReducer)
    return (
        <div className = "overlay">
           {search ? <Search/> : <Cart/>}
        </div>
    )
}
export default Overlay