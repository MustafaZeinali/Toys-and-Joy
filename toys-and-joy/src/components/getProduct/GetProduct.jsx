import { useEffect, useState } from "react";
import { url, shopId } from "../../data/constant.js";
import getProducts from "../../data/getProduct.js";


function BringData() {
  const [allProducts, setAllProducts] = useState([]);
  const [ nameItem , setNameItem] = useState("");

  // let handleSearch = () =>{
      
  //   setNameItem(event => event.target.value).filter(item => item.name.includes(nameItem))
  // }

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
            <li key={i}>
              <img src={item.picture} width="100px" height="100px" alt="" />
              <p className="item-name">{item.name}</p>
              <p className=""> {item.description} </p>
              <p> {item.price} kr </p>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default BringData;
