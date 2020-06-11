export  const filterByCode = (state,code) => { 
    var aux = 0 
    if (state.length > 0) { 
      for(var i in state ) {
        if (state[i].code_color === code) {
            aux =  state[i]
        }
      } 
   }
   if (aux != undefined && aux.sizes != undefined ){
    var sizesObj = aux.sizes.filter((sizes) => { 
        return sizes.available
    })
    aux.sizes = sizesObj.map((sizes) => { 
       return sizes.size
    })
    console.log(aux)
    }
   return aux
}
