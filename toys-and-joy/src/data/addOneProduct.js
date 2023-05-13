import {url , shopId} from './constant.js'
 const oneData =[{
    action: 'add-product',
    name : 'fgd' ,
    description:'det är bra valt för din familj under sommar mått rektangulär 300x180cm ',
    picture: "/image/uppblåsbar-pool.jpeg" ,
    price: 399,
    shopid: shopId,
},
]

async function addOneProduct(product) {
    console.log('its adding..');
   
    const options = {
        method: 'POST',
        headers:{'Content-type' : 'application/json'},
        body: JSON.stringify(product)
    }
    const response = await fetch(url,options)
    const statusObject = await response.json()
    console.log('response from api', statusObject);

}

async function addTheOneProduct() {
	
	let products = oneData.map(item => ({action: 'add-product',
    name: item.name ,
    description : item.description,
    price : item.price,
    picture : item.picture,
    shopid: item.shopid }))
	//console.log(products)

	products.forEach(product => {
		addOneProduct(product)
	})
}


addTheOneProduct()

export default {addTheOneProduct , addOneProduct , oneData}