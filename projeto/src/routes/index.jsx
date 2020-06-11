import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from "../pages/Home/index"
import Product from "../pages/Product/Product"
const Routes = () => (
     <Switch>
         <Route exact path = "/" component = {Home}/>
         <Route  path = "/product/:style" component = {Product}/>
     </Switch>
)
export default Routes;