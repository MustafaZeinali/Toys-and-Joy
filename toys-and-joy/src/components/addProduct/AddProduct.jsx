import { useState } from "react";
import addTheOneProduct from "../../data/addOneProduct.js"
import addOneProduct from "../../data/addOneProduct.js";
import oneData from  "../../data/addOneProduct.js"
//import addAllTheProducts from "../../data/addProduct.js";
import "./AddProduct.css"
//import shopId from "../../data/constant.js" 
const shopId =1010;
const AddProduct = () => {
    
const {toAddProduct , setToAddProduct} = useState([])
const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [price, setPrice] = useState("");



/*const oneProductData = [{
    action: 'add-product',
    name :  setName,
    description:setDescription,
    picture: 'url' ,
    price: setPrice,
    shopid: shopId,
}]*/


function handleAddProduct() {
    let newProduct = {
        action: 'add-product',
        name: name,
        description: description,
        price: price
    }

    
   
    async function addProduct(){
        
        setToAddProduct(await addOneProduct())
    } 
    addProduct()
    addTheOneProduct.push(newProduct)
    async function addTheOneProduct() {
        console.log('this is from addone product jsx');
        let products = newProduct.map(item => ({action: 'add-product',
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
  }

    return (
        <form className="form input-product">
            <label>Product name: {setName} </label>
            <input onChange={(e) => setName(e.target.value)} />
            <label>Description: {setDescription} </label>
            <input onChange={(e) => setDescription(e.target.value)}/>
            <label>Price: {setPrice} </label>
            <input onChange={(e) => setPrice(e.target.value)} />
            <button onClick={handleAddProduct} >ADD NEW PRODUCT</button>
        </form>
    )
}

export default AddProduct