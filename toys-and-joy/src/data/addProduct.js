import {url } from './constant.js' ;

import data from './allProducts'

async function addProduct() {
    console.log('its adding..');
    
    const option = {
        method: 'POST',
        headers:{'Content-type' : 'application/json'},
        body: JSON.stringify(data)
    }
    const response = await fetch(url,option)
    const statusObject = await response.json()
    console.log('response from api', statusObject);

}
/*const object ={
    name : 'kd',
    picture : '';
} */
async function addAllTheProducts() {
	
	
	data.forEach(product => {
		addProduct(product)
	})
}

addAllTheProducts()


