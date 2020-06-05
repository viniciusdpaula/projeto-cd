import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StoreRoute from './StoreRoute/StoreRoute'
const Routes = () => (
    <Switch>
        <Route exact path = "/">
            <StoreRoute/>
        </Route>
        <Route exact path = "/product/:id/:name">

        </Route>
    </Switch>
)
export default Routes;