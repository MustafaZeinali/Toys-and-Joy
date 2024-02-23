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
  const [nameError , setNameError] = useState(false)
  const [descriptionError , setDescriptionError] = useState(false)
  const [priceError , setPriceError] = useState(false)
  const [pictureError , setPictureError] = useState(false)

  const addItem = async () => {
    if( !nameError && !descriptionError && !priceError && !pictureError) {
    await addOneProduct(product);
    }
    else{
      console.log('fel');
    }
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
  // validation name of product
  const handleValidateName = (e) => {
    const validationName =  e.target.value
    setProduct({...product, name: validationName})
    validateName(validationName)
  }

  const validateName = (value) => {
    const regexName =  /^[a-öA-Ö\s]{2,20}$/;
    if(!value.trim() || !regexName.test(value)){
      setNameError(true)
      console.log("it works1");
    }
  
  else {
    setNameError("")
    console.log("it works3");
  }
  }

  // {(event) =>
  //   setProduct({ ...product, name: event.target.value })
  // }
  // validation description of product 
  const handleValdateDescription = (e) => {
    const updateDescription = e.target.value
    setProduct({...product, description: updateDescription})
    validateDescription(updateDescription)
  
  } 
  const validateDescription = (value) => {
    const regexDescription =  /^[\w\s"'-.,!?:a-öA-Ö]{2,70}$/i;
    if(!value.trim() || !regexDescription.test(value)){
      setDescriptionError(true)
    }else{
      setDescriptionError(false)
    }
  }

  const handleValidatePrice = (e) => {
    const updatePrice = e.target.value
    setProduct({...product, price: updatePrice})
    validatePrice(updatePrice)
  } 

  const validatePrice = (value) => {
    const regexPrice = /^[0-9]{2,8}$/;
    if(!value.trim() || !regexPrice.test(value)){
      setPriceError(true)
  }else{
    setPriceError("")
  }
}
  const handleValidatePicture = (e) => {
    const updatePicture = e.target.value
    setProduct({...product, picture: updatePicture})
    ValidatePicture(updatePicture)
  }

  const ValidatePicture = (value) => {
    const regexPicture =   /^(ftp|http|https):\/\/[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*([\/\?#][^\s]*)?$/;
    //  /^(http(s)?:\/\/(www\.)?\w[-/#%&.?]{2,}\.[a-z]{2,}([\w-/#%&.?]*)?)$/;
     

    if(!value.trim() || !regexPicture.test(value)) {
      setPictureError(true);
    }else{
      setPictureError("");
    }
  }

  return (
    <section className="form">
      <form action="" className="form-inputs">
        <label htmlFor="" className="name-product">
          Name :
          <input
            type="text"
            value={product.name}
            onChange={handleValidateName}
          />
          {nameError? <p> ogiltigt namn fyll i rätt</p> : null}
        </label>

        <label htmlFor="" className="description-product">
          Description :
          <textarea
            type="text"
            value={product.description}
            onChange={ handleValdateDescription}
          />
          {descriptionError? <p>ogiltig </p> : null}
        </label>

        <label htmlFor="" className="price-product">
          Price:
          <input
            type="number"
            value={product.price}
            onChange={handleValidatePrice}
          />
          {priceError? <p>ogiltig </p> : null}
        </label>

        <label htmlFor="" className="picture-product">
          Picture :
          <input
            type="url"
            value={product.picture}
            onChange={handleValidatePicture
            }
            
          />
          {pictureError? <p>ogiltig url</p> : null} 
        </label>
        

        <label htmlFor="" className="add-button">
          <button onClick={handleAddProduct}>ADD NEW PRODUCT</button>
        </label>
      </form>
    </section>
  );
};

export default AddProduct;
