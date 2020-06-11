
export const cart_format = (cart,item) => {
    let new_item =  {
        actual_price:cart.actual_price,
        name:cart.name,
        image:cart.image,
        size:item
    }
    console.log(new_item,'new_item')
    return new_item
} 
export const cart_inside = (cart,new_item) => { 
    if (cart.length != undefined){
       console.log(cart.length,'_carrt')
       cart.push(new_item)
    }
    return cart
}