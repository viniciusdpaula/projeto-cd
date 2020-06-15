

const INITIAL_STATE = {
    size : "",
    url:""
}
export   function productReducer(state  = INITIAL_STATE,action) { 
    switch (action.type) {
        case 'SET_SIZE':{
            return { 
                ...state,
                size : action.payload
            }
        }
        case 'SET_URL' :{ 
             return { 
                 ...state,
                 url:action.payload
             }
        }
        default:
          return state;
    }
}
export default productReducer;