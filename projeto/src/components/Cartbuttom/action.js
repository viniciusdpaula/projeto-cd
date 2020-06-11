import {minus,plus} from '../../utils/changeAmount'
export const cartClick =  (show) =>{   
   return {
     type:'CART_CLICK',
     payload:!show
    } 
}
export const changeAmount = (who,amount) => {
  console.log(who)
  console.log(amount)
  var aaa = 0
      if (who === 'minus' && amount > 0) 
    {
       aaa =   minus(amount)
    }
  else if (who === 'plus')
    {
      aaa = plus(amount)
    }
  return {
    type:'CHANGE_AMOUNT',
    payload:aaa
  }
}
export default {cartClick,changeAmount};
