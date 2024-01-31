import { useEffect, useState } from "react";
import getProducts from "../../data/getProduct.js";
import { IoSearchOutline } from "react-icons/io5";
import "./GetProduct.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";  
function BringData() {
  const [allProducts, setAllProducts] = useState([]);
  // const [ showItem , setShowItem] = useState(false);
  const [isClicked , setIsClicked] = useState(false);
 
  const navigate = useNavigate()
  

  const handleClick = (id) =>{
    console.log('it is clicked', id);
    navigate("/product/" + id);
  }
  // useEffect( () =>{
  //  const getId = async () => {
  //   try{
  //     setIsClicked(getProducts(id))
  //   }catch(err){
  //     console.log('error' , err);
  //   }
  //  }
  //  getId
  // },[allProducts])
 
  useEffect(() => {
    async function fetchData() {
        setAllProducts(await getProducts());
    }
    fetchData();
  }, []);

  return (
    <section>
      <div className="feature-item">
      <div className="search-item">
          <input type="text" className="search-input" placeholder="Sök" />
          <IoSearchOutline className="search-icon" />
        </div>
        <select name="" id="">
          <option value="">Filter</option>
          <option value=""> A-Ö </option>
          <option value=""> biligaste till dyraste</option>
        </select>
        </div>
      <ul className="container">
        {allProducts &&
          allProducts.map((item, id) => (
            <li  onClick={() =>{handleClick(item.id)}}  className="item-cart" key={id}>
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
