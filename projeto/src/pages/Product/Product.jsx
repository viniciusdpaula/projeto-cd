
import React, { useEffect, useState } from 'react'
import './Product.scss'
import {useSelector,useDispatch} from 'react-redux'
import {getProduct,addtoCart} from '../../store/reducers/product/action'
import Sizesbuttom from '../../components/Sizebutton/Sizebutton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus,faPlusSquare,faMinusSquare} from "@fortawesome/free-solid-svg-icons"
import Loading from '../../components/Loading/Loading'
import {useRouteMatch} from 'react-router-dom'

const Product = () => { 
    const [amount,setAmount] = useState(1)
    const {size} = useSelector(store => store.productReducer)
    const dispatch = useDispatch();
    const {SingleProduct} = useSelector(store => store.homeReducer)
    const url = useRouteMatch().params.style
    useEffect(() => {
            function setAction(){           
             dispatch(getProduct(url))            
        }
        setAction() 
    },[dispatch,url])
    function addCart(e,SingleProduct,amount){
         e.preventDefault()
          if (size !== "" ) { 
              dispatch((addtoCart(SingleProduct,size,amount)))
              console.log('COMPRA REALIZADA')
         }
        else   { 
            console.log('escolha um tamanho')
         }
    }
    function changeAmount(e,value) {
        if (value === 'minus' && amount > 1) {
           setAmount(amount - 1) 
        }   
        else if  (value === 'plus') { 
          setAmount(amount + 1)   
        }  
    }
    return (
        <section className = "main">  
        {SingleProduct !== undefined  ?      
                <div className = "main product__container">
                 {SingleProduct.image.length > 0 ?
                    <img className = "card__image-wraper"src = {SingleProduct.image} alt = "product"/>
                  : <img src = 'https://dummyimage.com/300x379.15/ffffff/f7f7f7.png&text=/' alt = "holder"/>
                 }
                    <div className = "product__info">
                        <p className = "product__info__tittle">{SingleProduct.name} </p>
                        {SingleProduct.on_sale ?
                        <span className = "product__info__discount_percentage">
                            {SingleProduct.discount_percentage} 
                        </span> : null }
                        <div className = "product__info">
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
                        <Sizesbuttom />
                        <div className ="product__info--buy ">
                          <span>Quantidade: </span>
                          <div className = "item__amount__buttons">
                          
                          <FontAwesomeIcon icon ={faMinusSquare} 
                          onClick = {(e) => changeAmount(e,'minus')}
                          />

                           <input placeholder = {amount} />
                          <FontAwesomeIcon icon ={faPlusSquare} 
                           onClick = {(e) => changeAmount(e,'plus')}
                          />
                          </div>
                        </div>
                        <button className = "product__buttom" 
                        onClick = {(e) => addCart(e,SingleProduct,amount)}>
                          <FontAwesomeIcon icon ={faCartPlus}/>
                        </button> 
                    </div>                   
                </div>
            :  <Loading/>}  

        </section>  
    )   
}
export default Product