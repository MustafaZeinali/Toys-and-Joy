
import { url, shopId } from "./constant.js";

async function verifyUser(user){
    console.log('user is logging in...');
    // let userObj = {
    //     shopid: shopId,
    //     username: user.username,
    //     password: user.password
    // }
    // console.log(userObj);
    const options = {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(user)
    };
    const response = await fetch(url + '?action=login-user', options)
    const statusLoggin = await response.json();
    console.log('response from API', statusLoggin);
    return {login: statusLoggin.status }
}
export default verifyUser;