export const searchUpdate = text => dispatch =>{
    dispatch({
        type:'SEARCH_UPDATE',
        payload:text
    }) 
}
