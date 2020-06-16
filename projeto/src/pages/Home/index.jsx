import React from 'react'
import {useSelector} from 'react-redux';
import {Card,Loading} from '../../components/index'

const Home = () => {
   const { loading,products} = useSelector(store => store.homeReducer) 
   if (loading )
   {
     return( 
       <Loading/>
     )
   }
    return (
      <div>
       <section className ="main" >
          <section className = "main catalog">  
          {products.length > 0 ? products.map(product =>  ( 
            <Card product = {product} key = {product.code_color} value = {product.code_color} /> 
            ))
            : <p> deu ruim </p>
            }
          </section>
       </section>
       </div> 
    )
}
export default Home;