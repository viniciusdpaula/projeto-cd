import React, { useState, useEffect } from 'react'; 



const StoreRoute = () => {
    const [products,setProducts] = useState([])
    useEffect( () => {
        fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
        .then((res) => res.json())
        .then(data => {setProducts(data)})
    },[])
    return ( 
        <div>
            {products.length > 0 ?
            <MainPage
            catalogo = {products} 
            />
            : <Loading/>
            }

            }
        </div>

    )
}
export default StoreRoute;