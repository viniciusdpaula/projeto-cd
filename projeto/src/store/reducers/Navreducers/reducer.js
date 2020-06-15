

const INITIAL_STATE = {
    search: false,
    overlay:false
}
export function searchReducer(state  = INITIAL_STATE,action) {
    switch (action.type) {
        case 'SET_SEARCH':
            return {
                search:true,
                overlay:!state.overlay
            }      
        case 'SET_CART': 
            return { 
                overlay:!state.overlay,
                search:false
            }
        case 'CLOSE_SEARCH': { 
            return { 
                search:false,
                overlay:false
            }
        }        
        default:
            return state;
    }
}