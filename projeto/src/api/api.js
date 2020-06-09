const url = 'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog'
console.log('5')
async function fetchProducts() {
    return  fetch(url)
    .then(response => response.json())
    .then((data) => { 
        return data       
    })
}

export default fetchProducts