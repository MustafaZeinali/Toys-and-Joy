import {url , shopId} from './constant.js'

async function addOneProduct(product) {
    console.log('its adding..');
   
    const options = {
        method: 'POST',
        headers:{'Content-type' : 'application/json'},
        body: JSON.stringify(product)
    }
    const response = await fetch(url +  '?action=add-product' ,options)
    const statusObject = await response.json(product)
    console.log('response from api', statusObject);

}
addOneProduct()

// async function addTheOneProduct() {
	
// 	let products = oneData.map(item => ({action: 'add-product',
//     name: item.name ,
//     description : item.description,
//     price : item.price,
//     picture : item.picture,
//     shopid: item.shopid }))
// 	//console.log(products)

// 	products.forEach(product => {
// 		addOneProduct(product)
// 	})
// }


// addTheOneProduct()

export { addOneProduct}