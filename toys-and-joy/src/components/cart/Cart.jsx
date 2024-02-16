import { useParams } from "react-router-dom";
import { useEffect , useState , useContext } from "react";
import { ToyContext } from "../../routes/ContextRoot";
import getProducts from "../../data/product/getProduct";
import "./Cart.css";

const { id } = useParams
const Cart = () => {
    const { order , setOrder} = useContext(ToyContext)
    useEffect( () => {
        async function fetchData(){
            if (order.id == id){
                const response = await getProducts(order)
            setOrder(response.id == id)
           
            console.log(response)   ;
            }
            
         } 
        fetchData
    },[order])

    let sumPriceOfProduct = order.reduce((acc , order) => acc + order.price, 0)
    console.log(sumPriceOfProduct , "it works ");
   // hur kan visa den på UI 

    return(
        <div>
            <ul className="cart-container">
            {order && order.map((item , x) => (
                <li className="cart-list" key={x}>
                    <img src={item.picture} alt="" />
                   <h3>{item.name}</h3>
                   <p> {item.description} </p>
                   <p> {item.price} kr </p>
                   
                    <span>Antal</span>
                </li>
                
            ) )}
            
            </ul>
        </div>
    )
}

export default Cart