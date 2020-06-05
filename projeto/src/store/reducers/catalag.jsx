
const INITIAL_STATE = { 
    cat = "",
    cart = []
}
const reducer = (state = INITIAL_STATE,action) => {
  switch (action.type) {
    case "value":  
      return 23
    default:
        return state;  
  }     

}
export default reducer