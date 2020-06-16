import React, {useState } from 'react'
import {setSize} from '../../store/reducers/product/action'
import {useSelector,useDispatch} from 'react-redux'
const Sizebuttom = () => {
    const dispatch = useDispatch()
    const {sizes} = useSelector(store => store.homeReducer)
    const [buttonSelected,setButtonSelected] = useState(false)
    function handleChange(value) { 
        const aux = [ ]
        for (var i in sizes) { 
            if (i === value ) { 
                aux[i] = true; 
            }    
            else aux[i] = false
        }
        setButtonSelected(aux)
        dispatch(setSize(sizes[value]))
        
    }    
    return( 
        <div className = "product__sizes">
        {sizes !== undefined   &&  
        sizes.map((size,index) => {
        return (
            <button 
            name = {index}
            className = {buttonSelected[index] ? "product__sizes__size--selected" :"product__sizes__size"} 
            key = {index}
            onClick = {(e) => handleChange(e.target.name)}
            > 
             {size} 
            </button>
          )
          }) 
        }
     </div>        
    )
}

export default Sizebuttom