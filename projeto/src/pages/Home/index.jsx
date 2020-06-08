import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import fetchProducts from "../../api/api"
import {getProducts,setLoading} from"./action"
import Card from '../../components/Card/Card'
import CardFooter from '../../components/CardFooter/CardFooter'
import './index.scss'
const Home = () => {
    console.log('2')
    const dispatch = useDispatch();
    const { products, loading} = useSelector(store => store)
    useEffect(() => {
        console.log(loading)
        console.log('3')
        dispatch(setLoading());
        async function getProductsApi() {
            console.log('4')
            const response =   await fetchProducts();
            console.log('6')
            dispatch(getProducts(response))
        }
        getProductsApi();
    },[dispatch])
    console.log(products,'7')
    //console.log(products[0])
    if (loading )
    {
        console.log('loading')
        return( 
        <p>
             Loading
        </p>
        )
    }    
    return (
       <main className = "main">
        <section className = "main__container">  
          {products.length > 0 ? products.map(product =>  (     
            <Card 
             product = {product}
             /> 
            )
            )
        : <p> deu ruim </p>
        }
        </section>
        </main>
    )
}
export default Home;