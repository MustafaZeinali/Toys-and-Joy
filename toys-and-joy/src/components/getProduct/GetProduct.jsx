import { useEffect, useState } from "react";
import { url, shopId } from "../../data/constant.js";
import getProducts from "../../data/getProduct.js";
import "./GetProduct.css";
import styled from "styled-components";

function BringData() {
  const [allProducts, setAllProducts] = useState([]);
  const [ showItem , setShowItem] = useState(false);

  // let handleSearch = () =>{
      
  //   setNameItem(event => event.target.value).filter(item => item.name.includes(nameItem))
  // }
  const styleItem = {
    position: "relative",
    left : '50%',
    top : '30%',

    
    

  }
  const handleClick = () =>{
    setShowItem(!showItem)
  }
 
  useEffect(() => {
    async function fetchData() {
        setAllProducts(await getProducts());
    }
    fetchData();
  }, []);

  return (
    <section>
      
      {/* <section>
          <input value={nameItem} type="text"  onChange={ handleSearch} />
      </section> */}
      <ul className="container">
        {allProducts &&
          allProducts.map((item, i) => (
            <li style={showItem? styleItem : null} onClick={handleClick} className="item-cart" key={i}>
              <img  src={item.picture}  alt="" />
              <p className="item-name">{item.name}</p>
              <p className="item-description"> {item.description} </p>
              <p className="item-price"> {item.price} kr </p>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default BringData;
