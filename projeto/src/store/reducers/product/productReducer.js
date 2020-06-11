

const INITIAL_STATE = {
    size : ""
}
export   function productReducer(state  = INITIAL_STATE,action) { 
    switch (action.type) {
        case 'SET_SIZE':{
            return { 
                ...state,
                size : action.payload
            }
        }
        default:
          return state;
    }
}
export default productReducer;