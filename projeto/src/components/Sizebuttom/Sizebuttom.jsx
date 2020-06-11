import React, {useState, useEffect } from 'react'
//import './Sizebuttom.scss'
import {setSize} from '../../store/reducers/product/action'
import {useSelector,useDispatch} from 'react-redux'
const Sizebuttom = () => {
    const dispatch = useDispatch()
    const {sizes} = useSelector(store => store.homeReducer)
    //const [hasSelected,sethasSelected] = useState(false)
    const [buttonSelected,setButtonSelected] = useState(false)
    function handleChange(value) { 
        const aux = [ ]
        for (var i in sizes) { 
            if (i == value ) { 
                aux[i] = true
            }
            else aux[i] = false
        }
        setButtonSelected(aux)
        dispatch(setSize(sizes[value]))
        
    }    
    return( 
        <div className = "">
        {sizes.length > 0  &&  
        sizes.map((size,index) => {
        return (
            <button 
            name = {index}
            className = {buttonSelected[index] ? "product__size--selected" :"product__size"} 
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