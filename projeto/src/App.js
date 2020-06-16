import React, {useEffect } from 'react';
import './App.scss';
import {useSelector,useDispatch} from 'react-redux';
import Routes from './routes/index'
import { BrowserRouter } from 'react-router-dom';
import fetchProducts from "./api/api"
import {getProducts,setLoading} from './store/reducers/homeReducer/action'
import { Loading} from './components/index'
const App = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(store => store.homeReducer) 
  useEffect(() => {
    console.log('oi')
      dispatch(setLoading(loading));
      async function getProductsApi() {
          const response =   await fetchProducts();
          dispatch(getProducts(response))
      }
      getProductsApi();
  },[dispatch])
  if (loading) return <Loading/> 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes/> 
      </BrowserRouter>     
    </div>
  );
}


export default App;
