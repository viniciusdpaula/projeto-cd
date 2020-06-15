
export const change_cart_amount = (cart,action) =>  { 
     cart.forEach(element => {
        if (element.name === action[0].name && element.size === action[0].size ) { 
            if (action[1] === 'minus' && element.item_amount  > 1) {
                action[0].item_amount =   action[0].item_amount  - 1;
           }
            else if (action[1]  === 'plus') {
                 action[0].item_amount  = action[0].item_amount  + 1;
            } 
        }
    })   
    return cart
}
