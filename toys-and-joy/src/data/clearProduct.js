import {url , shopId} from './constant.js'

async function deleteAll(){
    console.log('preparring to delete...');

    let ids = await getProductIds()

    ids.forEach( async id => {
        const data = { shopid: shopId , id , action : 'delete-product'}
        const options ={
        method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
        }
        const response = await fetch(url , options)
        const statusObject = await response.json()
        console.log('succed' , statusObject);
        
    });
}

async function getProductIds() {
	try {
		const response = await fetch(url + '?action=get-products&shopid=' + shopId )
		const data = await response.json()
		console.log('response from data' ,data);
		return data.map(product => product.id)
	} catch(error) {
		console.log('Use console.log to find out what the error is.', data)
	}
	return null
}

deleteAll()