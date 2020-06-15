import React, {useEffect } from 'react';
import './App.scss';
import {useSelector,useDispatch} from 'react-redux';
import Topbar from './components/Topbar/Topbar'
import Routes from './routes/index'
import Overlay from './components/Overlay/Overlay'
import { BrowserRouter } from 'react-router-dom';
import fetchProducts from "./api/api"
import {getProducts,setLoading} from './store/reducers/homeReducer/action'

const App = () => {
  const {overlay} = useSelector(store => store.searchReducer)
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(setLoading());
      async function getProductsApi() {
          const response =   await fetchProducts();
          dispatch(getProducts(response))
      }
      getProductsApi();
  },[dispatch])
  const { loading} = useSelector(store => store.homeReducer) 
  if (loading )
  {
    return( 
      <p>Loading</p>
    )
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar/>
        {overlay ?  <Overlay/> :null}
        <Routes/> 
      </BrowserRouter>     
    </div>
  );
}

export default App;
