import React from 'react'
import {useSelector} from 'react-redux';
import {Card} from '../../components/index'

const Home = () => {
    const { products} = useSelector(store => store.homeReducer);  
    return (
       <section className ="main" >
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