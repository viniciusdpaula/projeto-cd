import React from 'react'
import {Overlay,Topbar} from '../components/index'
import {useSelector} from 'react-redux'
import Home from '../pages/Home/index'
import Product from '../pages/Product/Product'
import { Route} from 'react-router-dom';
const Dale=() => { 
    const {overlay} = useSelector(store => store.searchReducer)
    return (
       <body>
          <Topbar/>
          {overlay && <Overlay/>}
          <Route exact path = "/" component = {Home}/>
          <Route  path = "/product/:style" component = {Product}/>
      </body> 
    )
}
export default Dale