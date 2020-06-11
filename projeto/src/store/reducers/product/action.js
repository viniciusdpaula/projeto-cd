export const  setSize  = (size) => { 
    console.log(size)
    return { 
        type:"SET_SIZE",
        payload:size
    }
}