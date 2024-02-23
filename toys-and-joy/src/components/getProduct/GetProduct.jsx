import { useEffect, useState } from "react";
import getProducts from "../../data/product/getProduct.js";
import { IoSearchOutline } from "react-icons/io5";
import "./GetProduct.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ToyContext } from "../../routes/ContextRoot.jsx";

function BringData() {
  const { allProducts, setAllProducts, isLogined } = useContext(ToyContext);
  const [searchItem, setSearchItem] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);
  // const [sortPrice , setSortPrice] = useState([]);
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
  // useEffect(() => {
  //   const filtered = allProducts.filter((product) =>
  //     product.name.toLowerCase().includes(searchItem)
  //   );
  //   setFilteredProducts(filtered);
  // }, [searchItem, allProducts]);
  // const handleSortedChange = (e) => {
  //   const selectedOption = e.target.value;
  //   let sortedItems = [...allProducts];

  //   if (selectedOption === "lowToHigh") {
  //     sortedItems.sort((a, b) => a.price - b.price);
  //   } else if (selectedOption === "alphabetical") {
  //     sortedItems.sort((a, b) => (a.name.localeCompare(b.name)));
  //   }
  //   setSortedProducts(sortedItems);

  //   const searchedProducts =  searchProducts(sortedItems);
  //   setSortedProducts(searchedProducts);
  // };
  // const sortItemByPrice = () => {
  //   const sortedItems = [...sortedProducts, ...sortPrice ]
  //   const pricItem = sortedItems.sort((a, b ) => a.price - b.price);
  //   if(pricItem){
  //     setSortPrice(allProducts);
  //     setSortedProducts("");

  //   }
  //   console.log(pricItem);
   
  // }

 

  const searchProducts = () => {
    // const selected = [...allProducts, ...searchItem];

    const filter = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchItem)
    );
    setSortedProducts(filter);
    console.log(filter);
    return filter
  };

  const handleSearchInputChange = (e) => {
    setSearchItem(e.target.value.toLowerCase());
    if (e.target.value.trim() === "") {
      setSortedProducts(allProducts); // Show all products when search input is empty
    }
  };
  //sortera enligt pris

  // const lowToHighPrice =() =>{

  //  let productSortedByPrice = allProducts.sort((a, b) => a.price - b.price);
  //  return productSortedByPrice

  // }
    // const sortProducts = sortedProducts(sortPrice);

  return (
    <section>
      {isLogined ? <p className="loggar-ut" onClick={() => navigate(-2)}>logga ut</p> : null}
      <div className="feature-item">
      <button className="allproducts-btn" onClick={handleSearchInputChange} >Alla products</button>
        <div className="search-item">
          
          <input
            type="text"
            onChange={handleSearchInputChange }
            className="search-input"
            placeholder="Sök"
          />
          <IoSearchOutline className="search-icon" onClick={searchProducts} />
        </div>

       
      
          {/* <button type="button" >bil-dyr</button>
          <button value="alphabatical"> a-ö</button> */}
        
      </div>
      <ul className="container">
        {sortedProducts &&
          sortedProducts.map((item, id) => (
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
