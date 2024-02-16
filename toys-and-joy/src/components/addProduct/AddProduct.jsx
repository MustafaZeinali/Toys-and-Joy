import { useEffect, useState } from "react";
import "./AddProduct.css";
import { shopId} from "../../data/constant.js";

import {addOneProduct} from "../../data/addOneProduct.js";



const AddProduct = () => {
  const [product, setProduct] = useState({
    // use a single state object for the product
    name: "",
    description: "",
    price: "",
    picture: "",
    shopid: shopId,
  });
  const addItem = async () => {
    await addOneProduct(product);
  }
 

 async function handleAddProduct(e) {
    e.preventDefault();
    const newProduct = {
      action: "add-product",
      name: product.name, // get values from the product state object
      description: product.description,
      price: product.price,
      picture: "",
      shopid: shopId,
    };

    const result = await addItem(newProduct);
    return result // pass the newProduct object to addOneProduct
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
          />
        </label>

        <label htmlFor="">
          Description :
          <textarea
            type="text"
            value={product.description}
            onChange={(event) =>
              setProduct({ ...product, description: event.target.value })
            }
          />
        </label>

        <label htmlFor="">
          Price:
          <input
            type="number"
            value={product.price}
            onChange={(event) =>
              setProduct({ ...product, price: event.target.value })
            }
          />
        </label>

        <label htmlFor="">
          Picture :
          <input
            type="url"
            value={product.picture}
            onChange={(event) =>
              setProduct({ ...product, picture: event.target.value })
            }
          />
        </label>
        

        <label htmlFor="" className="add-button">
          <button onClick={handleAddProduct}>ADD NEW PRODUCT</button>
        </label>
      </form>
    </section>
  );
};

export default AddProduct;
