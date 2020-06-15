import { element } from "prop-types"

export  const filterByCode = (state,code) => { 
    if (state.length > 0) { 
      var aux =  state.find((element) => element.code_color === code)
   }
   return aux
}

export const findSizes = (product) => { 
  if (product !== undefined )
     var sizesObj = product.sizes.filter((sizes) => { 
         return sizes.available
     })
     sizesObj.sizes = sizesObj.map((sizes) => { 
      return sizes.size    
  })
  return sizesObj.sizes
}
export const findItem = (catalog,name) => { 
  var catalog_aux = catalog.filter((item) => {
    return item.name.toLowerCase().indexOf(name.toLowerCase())  !== -1
     })
  return catalog_aux
}
