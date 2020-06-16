
export const cart_format = (cart,item) => {
    let new_item =  {
        actual_price:item[0].actual_price,
        name:item[0].name,
        image:item[0].image,
        size:item[1],
        item_amount:item[2]
    }

    if (cart !== undefined){
        var id = cart.findIndex(i => {
            return i.name === new_item.name && i.size === new_item.size })
        if (id !== -1)  {  
          cart[id].item_amount++
        }
        else   cart.push(new_item)
     }  
    return cart
}
const floatFormat = (string) => { 
    if (string !== undefined){
    string = string.replace(",",".")
    string = string.split("R$",);
    return  parseFloat(string[1]).toFixed(2)
}
}
export const calc_price = (cart) => { 
   if (cart !== undefined) { 
       let totalP = cart.reduce((total,item) => {    
          var value = floatFormat(item.actual_price)
          value = value * item.item_amount
          return (total + value)
       },0)
       return totalP.toFixed(2)
   }
}
export const calc_qt = (cart) => { 
   if (cart !== undefined) { 
       let quantity = cart.reduce((total,item) => {   
           var value  = item.item_amount 
        return (total + value)
   },0)
   return quantity
   }
}