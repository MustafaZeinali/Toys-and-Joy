import {url , shopId} from './constant.js' ;

import data from './dataOfProducts.js';


async function addProduct(allproducts) {
    console.log('its adding 1..');
   
    const options = {
        method: 'POST',
        headers:{'Content-type' : 'application/json'},
        body: JSON.stringify(allproducts)
    }
    const response = await fetch(url,options)
    const statusObject = await response.json()
    console.log('response from api', statusObject);

}

async function addAllTheProducts() {
	// Detta är bara till för att skapa en array med produkter
	// Använd din egen data
	let products = data.map(item => (
    {action: 'add-product',
    name: item.name ,
    description : item.description,
    price : item.price,
    picture : item.picture,
    shopid: item.shopid }))
	console.log(products)

	products.forEach(product => {
		addProduct(product)
	})
}


addAllTheProducts()

export default addAllTheProducts

