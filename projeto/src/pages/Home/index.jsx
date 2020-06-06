import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import fetchProducts from "../../api/api"
import {getProducts,setLoading} from"./action"
import Card from '../../components/Card'
import CardFooter from '../../components/CardFooter'

const Home = () => {
    console.log('2')
    const dispatch = useDispatch();
    const {products} = useSelector(store => store)
    useEffect(() => {
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
    return (
        <div>
          {products.map(product =>  {
            <Card 
              img = {product.image}
              name = {product.name}
              style = { product.style}
              discount_percentage = {product.discount_percentage}
              sizes = {product.sizes}
            >
                <CardFooter 
                 name = {product.name}
                 actual_price = {product.actual_price}
                 regular_price = { product.regular_price}
                />
            </Card> 
            }
            )}
        </div>
    )
}
export default Home;