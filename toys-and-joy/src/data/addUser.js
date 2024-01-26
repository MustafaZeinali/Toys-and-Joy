
import {shopId, url } from "./constant.js"


async function addUser(user){
  
    console.log('adding admin...');

    const options ={
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }
    const response = await fetch(url + '?action=add-user', options)
    const statusObject = await response.json()
    console.log('response from api', statusObject);
}

export default addUser

