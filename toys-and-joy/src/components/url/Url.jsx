
const url = 'https://www.forverkliga.se/JavaScript/api/fe/'

const shopId = 1010

const GetProduct = () =>{ 
async function getProducts() {
	let urlWithQuery = url + '?action=get-products&shopid=' + shopId
	try {
		const response = await fetch(urlWithQuery)
		const data = await response.json()
		return data
	} catch(error) {
		console.log('Use console.log to find out what the error is.' , data)
	}
	return null
}getProducts()
}
export default GetProduct
