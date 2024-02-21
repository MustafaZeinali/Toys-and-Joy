import { shopId, url } from "./constant.js"



async function clearUser(userId) {
    console.log('it is deleting user');
    // const data = {shopid:shopId, userid: id , action: "delete-user"}
    const data = {
        action: "delete-user",
         shopid : shopId,
         userid : userId

}
    const options= {
        method: 'POST',
        headers: {'Content-Type' : 'application/json' },
        body: JSON.stringify(data)
    }
    console.log('CLEAR USER sending data: ', data);
    
    const response = await fetch (url + '?action=' , options)
    const clearData = response.json()
    console.log("respons from api", clearData);
    return clearData
}
// clearUser({userid: id , username:'admin'})
export default clearUser