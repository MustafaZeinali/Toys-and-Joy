import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import getProducts from "../../data/product/getProduct.js";
import deleteProduct from "../../data/product/deleteProduct.js";
import "./DetailsItem.css";
import { ToyContext } from "../../routes/ContextRoot.jsx";

const DetailsItem = () => {
  const { order, setOrder, isLogined, setAllProducts, allProducts } =
    useContext(ToyContext);
  const [editName, setEditName] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editPrice, setEditPrice] = useState("");
  // kolla om användaren är inloggad som admin
  // om den är inloggad som admin ska vyn se annorlunda ut))
  // det kommer att vara inputfält istället för p-taggar så man enkelt kan byta ut texten
  // lägga till en 'klar'-knapp
  // när man klickar på 'klar' ska produkten uppdateras i context (setAllProducts)
  console.log(isLogined);
  const { id } = useParams();
  // fetch på produkterna
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function getProduct() {
      const products = await getProducts();
      setProduct(products.find((p) => p.id == id));
    }
    getProduct();
  }, [id]);

  const addToCart = () => {
    const updatedOrder = [...order, product];
    setOrder(updatedOrder);
    console.log(order);
  };
  // använda pdrodukten och visa i ditt UI

  const saveBtn = () => {
    // uppdatera produkten lokalt
    let updatedProduct = { ...product };
    editName == ""
      ? (updatedProduct.name = product.name)
      : (updatedProduct.name = editName);
    editDesc == ""
      ? (updatedProduct.description = product.description)
      : (updatedProduct.description = editDesc);
    editPrice == ""
      ? (updatedProduct.price = product.price)
      : (updatedProduct.price = editPrice);
    console.log(updatedProduct);
    // gör en kopia på gamla listan över produkter
    let productsList = [...allProducts];
    // find index of Updated Product In Old Product List
    let index = productsList.findIndex(
      (product) => product.id === updatedProduct.id
    );
    // skicka in den uppdaterade produkten till de andra produkterna
    productsList.splice(index, 1, updatedProduct);
    // uppdatera statet
    setAllProducts(productsList);
  };

  const removeItem = () => {
    // gör en kopia på gamla listan över produkter
    let productsList = [...allProducts];
    // find index of Updated Product In Old Product List
    let index = productsList.findIndex(
      (p) => p.id === product.id
    );
    // skicka in den uppdaterade produkten till de andra produkterna
    productsList.splice(index, 1);
    // uppdatera statet
    setAllProducts(productsList);

    // uppdatera API:et med
    deleteProduct(product.id);
  };

  return (
    <div>
      {!isLogined ? (
        <section className="form-details">
          <article className="item-details-container">
            <img className="img-item" src={product.picture} alt="" />
            <input
              defaultValue={product.name}
              onChange={(e) => setEditName(e.target.value)}
            />
            <input
              defaultValue={product.description}
              onChange={(e) => setEditDesc(e.target.value)}
            />
            <input
              defaultValue={product.price}
              onChange={(e) => setEditPrice(e.target.value)}
            />
            <button className="btn-details" onClick={saveBtn}>
              Spara
            </button>
            <button className="btn-details red" onClick={removeItem}>
              ta bort
            </button>
          </article>
        </section>
      ) : (
        <section className="form-details">
          <article className="item-container">
            <img className="img-item" src={product.picture} alt="" />
            <h2>{product.name}</h2>
            <p className="item-detlais-name">{product.description}</p>
            <p className="item-details-price">{product.price} kr</p>
            <button className="btn-details" onClick={addToCart}>
              lägg till
            </button>
          </article>
        </section>
      )}
    </div>
  );
};

export default DetailsItem;