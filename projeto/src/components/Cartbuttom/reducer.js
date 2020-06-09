const INITIAL_STATE = {
    show: false
}
export function cartReducer(state  = INITIAL_STATE,action) {
    switch (action.type) {
        case 'CART_CLICK':
            return {
                ...state,
                show: action.payload
            }
        case 'OVERLAY_CLICK':
            return {
                ...state,
                show:false  
            }                   
        default:
            return state;
    }
}