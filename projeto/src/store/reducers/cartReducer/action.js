
  const cartClick =  (show) =>{   
    return {
      type:'CART_CLICK',
      payload:!show
    } 
}
  const changeAmount = (item,who) => {
    return {
      type:'CHANGE_AMOUNT',
      payload:[item,who]
  }
}
   const deleteItem = (id) => {
    return { 
      type:"DELETE_ITEM",
      payload:id
    } 
}
   const resetCart = () => {
    return { 
      type:"RESET_CART",
    }
}

export  {cartClick,changeAmount,deleteItem,resetCart}