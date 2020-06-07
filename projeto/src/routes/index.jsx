import React from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from "../pages/Home/index"
const Routes = () => (
    <BrowserRouter>
     <Switch>
         {console.log('1')}
         <Route exact path = "/" component = {Home}/>
         <Route exact path = "/product/:id/:name">
         </Route>
     </Switch>
     </BrowserRouter> 
)
export default Routes;