import React from 'react' 
import {useDispatch} from 'react-redux'
import {changeAmount} from '../../store/reducers/cartReducer/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare,faMinusSquare} from "@fortawesome/free-solid-svg-icons"
export const Amountbuttom = ({item}) =>  {
    const dispatch = useDispatch()
    const daleAction = (e,value) => { 
        dispatch(changeAmount(item,value))
    }    
    return (
        <div className = "cart__buttons">
          <button type = "minus"className = "cart__buttons--amount" 
            onClick = {(e) =>daleAction(e,'minus')}>
             <FontAwesomeIcon icon = {faMinusSquare }/>
          </button>
          <span className = "cart__info--span"> 
           {item.item_amount}
          </span>
          <button className = "cart__buttons--amount"
           onClick = {(e) => daleAction(e,'plus')} >
              <FontAwesomeIcon icon = {faPlusSquare }/>
          </button>
        </div>        
    )
}
export default Amountbuttom