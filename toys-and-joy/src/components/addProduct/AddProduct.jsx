/*import { useState } from "react";
//import addTheOneProduct from "../../data/addOneProduct.js"
//import addOneProduct from "../../data/addOneProduct.js";
//import oneData from  "../../data/addOneProduct.js"
//import addAllTheProducts from "../../data/addProduct.js";
import "./AddProduct.css"
import addAllTheProducts from "../../data/addProduct";
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

    /*function newItem (name,description,image,price){
        name.replace({newProduct.name})
    }

    function handleAddProduct() {
        let newProduct = {
            action: 'add-product',
            name: name,
            description: description,
            price: price ,
            picture: "/image/uppblåsbar-pool.jpeg",
            shopid :shopId
        }

        
        async function addOneProduct(product) {
            console.log('its adding..');
           
            const options = {
                method: 'POST',
                headers:{'Content-type' : 'application/json'},
                body: JSON.stringify(product)
            }
            const response = await fetch(url,options)
            const statusObject = await response.json()
            console.log('response from api', statusObject);
        
        }
        
         
        addAllTheProducts.push(addTheOneProduct)
        async function addTheOneProduct() {
            console.log('this is from addone product jsx');
            let products = [newProduct].map(item => ({action: 'add-product',
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
            addTheOneProduct();

         
    }
   
    return (
         <>   
            <form className="form input-product">
                <label>Product name: {name} </label>
                <input onChange={(e) => setName(e.target.value)} />
                <label>Description: {description} </label>
                <input onChange={(e) => setDescription(e.target.value)}/>
                <label>Price: {price} </label>
                <input onChange={(e) => setPrice(e.target.value)} />
                <button onClick={handleAddProduct} >ADD NEW PRODUCT</button>
            </form>
            
        </>    
    )
}*/

//export default AddProduct*/


/*<section>
             <ul>
                {toAddProduct && toAddProduct.map(item => {
                  <li key={item.productid} >
                     <p>{item.name}</p>
                     <p> {item.description} </p>
                     <p> {item.price} </p>
                  </li>  
                }) }
                </ul>   
            </section>*/


            import { useState } from "react";
            import "./AddProduct.css";
            const url = 'https://www.forverkliga.se/JavaScript/api/fe/'; // add url variable
            
            const shopId = 1010;
            
            const AddProduct = () => {
              const [product, setProduct] = useState({ // use a single state object for the product
                name: "",
                description: "",
                price: "",
                picture: "",
                shopid: shopId,
              });

            
              async function addOneProduct(product) { // pass the entire product object as an argument
                console.log("its adding 2..");
            
                const options = {
                  method: "POST",
                  headers: { "Content-type": "application/json" },
                  body: JSON.stringify(product), // pass the entire product object as the request body
                };
            
                const response = await fetch(url, options);
                const statusObject = await response.json();
                console.log("response from api", statusObject);
              }
            
              function handleAddProduct() {
                const newProduct = {
                  action: "add-product",
                  name: product.name, // get values from the product state object
                  description: product.description,
                  price: product.price,
                  picture: "/image/uppblåsbar-pool.jpeg",
                  shopid: shopId,
                };
            
                addOneProduct(newProduct); // pass the newProduct object to addOneProduct
              }
            
              return (
                <section className="form">
                <form action="" className="form-inputs">
                  <label htmlFor="" className="name-product">
                    Name :
                  <input
                    type="text"
                    value={product.name}
                    onChange={(event) =>
                      setProduct({ ...product, name: event.target.value })
                    }
                    
                  /></label> 

                  <label htmlFor="">
                    Description :
                  <textarea
                    type="text"
                    value={product.description}
                    onChange={(event) =>
                      setProduct({ ...product, description: event.target.value })
                    }
                  /></label>

                  <label htmlFor="">Price:  
                  <input
                    type="number"
                    value={product.price}
                    onChange={(event) =>
                      setProduct({ ...product, price: event.target.value })
                    }
                  /></label>

                  <label htmlFor="">Picture :
                  <input type="file" 
                  value={product.picture}
                  onChange={(event) => setProduct({...product, picture : event.target.value})}
                  /></label>

                  <label htmlFor="" className="add-button">
                  <button onClick={handleAddProduct}>ADD NEW PRODUCT</button>
                  </label>

                  </form>
                  </section> 
              );
            };
            
            export default AddProduct;
            