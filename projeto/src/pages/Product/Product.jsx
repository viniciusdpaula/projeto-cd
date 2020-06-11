import React, { useEffect, useState } from 'react'
import './Product.scss'
import {useSelector,useDispatch} from 'react-redux'
import {getProduct,addtoCart} from './action'
import Cart from '../../components/Cart/Cart'
import Sizesbuttom from '../../components/Sizebuttom/Sizebuttom'
const Product = () => { 
    const [sizesAux,setSizesAux] = useState({})
    const [hasSelected,sethasSelected] = useState(false)
    const {show} =useSelector(store => store.cartReducer)
    const {size} = useSelector(store => store.productReducer)
    const dispatch = useDispatch();
    const [load,setLoad] = useState(true)
    const [url] = useState( () =>{
        const {pathname} = window.location
        const param = pathname.split("/")[2]
        return param
    })
    const {SingleProduct} = useSelector(store => store.homeReducer)
    useEffect(() => {
            function setAction(){           
             dispatch(getProduct(url))            
        }
        setAction() 
        
    },[dispatch])
    function addCart(e,SingleProduct){
         e.preventDefault()
          if (size !== "" ) { 
              dispatch((addtoCart(SingleProduct,size)))
              console.log('COMPRA REALIZADA')
         }
        else   { 
            console.log('escolha um tamanho')
         }
        }
     useEffect(() => { 
         if (SingleProduct != undefined && SingleProduct.sizes != undefined ){
         var sizesObj = SingleProduct.sizes.filter((sizes) => { 
             return sizes.available
         })
         setLoad(false)
         setSizesAux(sizesObj)
     }
    },[SingleProduct,hasSelected])
    if (load) { 

        return (
            <p> dale</p>
        )
    }
    return (
        <section className = "main">
            {SingleProduct !== undefined  && 
            show ?  
              <div id="overlay"> <Cart/> </div> 
            : <div id="overlay--rest"/> }               
                <div className = "main product__container">
                    <img src = {SingleProduct.image} alt = "product"/>
                    <div className = "main product__info">
                        <p className = "product__info__tittle">{SingleProduct.name} </p>
                        {SingleProduct.on_sale ?
                        <span className = "product__info__discount_percentage">
                            {SingleProduct.discount_percentage} 
                        </span> : null }
                        <div className = "product__price">
                            <div className = "product__price--mod">
                                {SingleProduct.on_sale ?
                              <span className = "product__price--regular">
                              {SingleProduct.regular_price}</span>
                              :null}
                              <span className = "product__price--actual">
                                  {SingleProduct.actual_price}
                              </span>
                            </div>
                            <span className = "installments">
                                {SingleProduct.installments} 
                            </span>
                        </div>
                        <div className = "product__sizes">
                           <Sizesbuttom single_product = {SingleProduct.sizes} />
                        </div>
                        <div className ="item__amount--buy ">
                          <span>Quantidade: </span>
                          <div className = "item__amount__buttons">
                          <i className="fa fa-plus-square"></i>
                           <input placeholder = "1"/>
                          <i className="fa fa-minus-square"></i>
                          </div>
                        </div>
                        <button className = "buy__button" 
                        onClick = {(e) => addCart(e,SingleProduct)}>
                          <i className="fa fa-cart-plus"></i>
                        </button> 
                    </div>                   
                </div>
            }
        </section>  
    )   
}
export default Product