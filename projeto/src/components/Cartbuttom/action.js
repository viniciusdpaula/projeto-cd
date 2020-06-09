export const cartClick =  (show) =>{   
   return {
     type:'CART_CLICK',
     payload:!show
    } 
}
export default cartClick;