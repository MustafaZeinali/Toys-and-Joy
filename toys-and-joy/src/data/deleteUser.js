import { shopId, url } from "./constant.js"

async function clearUser(user) {
    console.log('it is deleting user');
    const options= {
        method: 'DELETE',
        headers: {'Content-Type' : 'application/json' },
        body: JSON.stringify(user)
    }

    const response = await fetch (url + '?action=' + options)
    const clearData = response.json()
    return clearData
}
clearUser({shopid:shopId , username:'admin'})
export default clearUser