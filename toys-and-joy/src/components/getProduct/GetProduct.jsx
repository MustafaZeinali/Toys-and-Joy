import { useEffect, useState } from "react";
import getProducts from "../../data/product/getProduct.js";
import { IoSearchOutline } from "react-icons/io5";
import "./GetProduct.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ToyContext } from "../../routes/ContextRoot.jsx";

function BringData() {
  const { allProducts, setAllProducts, islogined } = useContext(ToyContext);
  const [searchItem, setSearchItem] = useState("");
  const [sortedproducts, setSortedProducts] = useState([]);
  // const [ showItem , setShowItem] = useState(false);

  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log("it is clicked", id);
    navigate("/product/" + id);
  };

  useEffect(() => {
    async function fetchData() {
      if (allProducts.length < 1) {
        setAllProducts(await getProducts());
      }
    }
    fetchData();
  }, []);

  const handleSortedChange = (e) => {
    const selectedOption = e.target.value;
    let sortedItems = [...allProducts];

    if (selectedOption === "lowToHigh") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (selectedOption === "alphabetical") {
      sortedItems.sort((a, b) => (a.name.localeCompare(b.name)));
    }
    setSortedProducts(sortedItems);
  };

  // sortera product enligt namn
  const filterProduct = (e) => {
    setSearchItem(e.target.value.toLowerCase());
  };
  const searchProducts = () => {
    let searchProduct = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchItem)
    );
    console.log(searchProduct);
    return searchProduct;
  };

  //sortera enligt pris

  // const lowToHighPrice =() =>{

  //  let productSortedByPrice = allProducts.sort((a, b) => a.price - b.price);
  //  return productSortedByPrice

  // }
  // const sortProducts = handleSortedChange(searchProducts);

  return (
    <section>
      <div className="feature-item">
        <div className="search-item">
          <input
            type="text"
            onChange={filterProduct}
            className="search-input"
            placeholder="Sök"
          />
          <IoSearchOutline className="search-icon" onClick={searchProducts} />
        </div>

        <select onChange={handleSortedChange}>
          <option value="">Filter</option>
          <option value="lowToHigh">bil-dyr</option>
          <option value="alphabatical"> a-ö</option>
        </select>
      </div>
      <ul className="container">
        {sortedproducts &&
          sortedproducts.map((item, id) => (
            <li
              onClick={() => {
                handleClick(item.id);
              }}
              className="item-cart"
              key={id}
            >
              <img src={item.picture} alt="" />
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
