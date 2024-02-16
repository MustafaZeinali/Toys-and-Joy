import {url , shopId} from '../constant.js'


async function deleteProduct(productId) {
    const deleteurl = url + '?action=delete-product';
	console.log('deleting product..');
    const options = {
        method: 'POST',
        headers:{'Content-type' : 'application/json'},
        body: JSON.stringify({shopid: shopId, productid: productId})
    };
	const response = await fetch(deleteurl, options);
    const statusObject = await response.json();
    console.log('response from api: ', statusObject);
}


export default deleteProduct