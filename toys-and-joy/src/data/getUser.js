import { url ,shopId } from "./constant.js";

async function getUser(allUsers){
    console.log('getting user...');

    const response = await fetch (url + '?action=get-users&shopid=' + shopId)
    const data = await response.json(allUsers);

    console.log('response from API...' , data);

    return data;

    
}
getUser()
export default getUser;