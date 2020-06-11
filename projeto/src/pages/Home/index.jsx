import React from 'react'
import {useSelector} from 'react-redux';
import Card from '../../components/Card/Card'
import './index.scss'
import Cart from '../../components/Cart/Cart';
const Home = () => {
    const { products} = useSelector(store => store.homeReducer);
    const {show} = useSelector(store => store.cartReducer)    
    return (
       <section className ="main" >
        {show ?  
          <div id="overlay"> <Cart/> </div> 
        : <div id="overlay--rest"/> }
          <section className = "main catalog">  
          {products.length > 0 ? products.map(product =>  (     
            <Card product = {product} key = {product.code_color} /> 
            ))
            : <p> deu ruim </p>
            }
          </section>
       </section>
    )
}
export default Home;