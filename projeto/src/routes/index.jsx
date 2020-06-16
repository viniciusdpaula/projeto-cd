import React from 'react';
import { Route, Switch} from 'react-router-dom';
import {Provider} from "react-redux";
import {store,persistor} from "../store/store" 
import {PersistGate} from 'redux-persist/integration/react'
import Dale  from './root'

const Routes = () => (
     <Switch >
     <Provider store = {store}>       
      <PersistGate loading = {null} persistor ={persistor}>
                <Route path = "/" component = {Dale}/>
     </PersistGate>
    </Provider>          
     </Switch>
)
export default Routes;