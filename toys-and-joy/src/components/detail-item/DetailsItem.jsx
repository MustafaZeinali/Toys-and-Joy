import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getProducts from "../../data/getProduct.js";

const DetailsItem = () => {
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

  // använda pdrodukten och visa i ditt UI
  return (
    <article>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
    </article>
  );
};

export default DetailsItem;
