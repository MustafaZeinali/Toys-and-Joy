import {url , shopId} from '../constant.js'


async function getProducts() {
	console.log('getting products..');
	try {
		const response = await fetch(url + '?action=get-products&shopid=' + shopId )
		const data = await response.json()
		console.log(data);
		return data
	} catch(error) {
		console.log('Use console.log to find out what the error is.', data)
	}
	return null
}

getProducts()

export default getProducts