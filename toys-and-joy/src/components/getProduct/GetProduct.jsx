import { useEffect, useState } from "react";
import { url, shopId } from "../../data/constant.js";
import getProducts from "../../data/getProduct.js";

function BringData() {
  const [allProducts, setAllProducts] = useState([]);
  console.log(getProducts);

  useEffect(() => {
    async function fetchData() {
        setAllProducts(await getProducts());
    }
    fetchData();
  }, []);

  return (
    <section>
      <ul>
        {allProducts &&
          allProducts.map((item) => (
            <li key={item.productid}>
              <img src={item.picture} width="100px" height="100px" alt="" />
              <p>{item.name}</p>
              <p> {item.description} </p>
              <p> {item.price} </p>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default BringData;
