
const INITIAL_STATE = {
    search: ""
}
export function searchReducer(state  = INITIAL_STATE,action) {
    switch (action.type) {
        case 'SEARCH_UPDATE':
            return {
                ...state,
                search: action.payload
            }      
        default:
            return state;
    }
}