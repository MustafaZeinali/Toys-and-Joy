import { useParams } from "react-router-dom";
import { useEffect , useState , useContext } from "react";
import { ToyContext } from "../../routes/ContextRoot";
import getProducts from "../../data/product/getProduct";
import "./Cart.css";
import { IoCloseSharp } from "react-icons/io5";

const { id } = useParams
const Cart = () => {
    const { order , setOrder} = useContext(ToyContext)
    const [existOrder, setExistOrder] = ([])
    // useEffect( () => {
    //     async function fetchData(){
    //         if (order.id == id){
    //             const response = await getProducts(order)
    //         setOrder(response.id == id)
           
    //         console.log(response)   ;
    //         }
        
            
    //      } 
    //     fetchData
    // },[order])
    // lägg reduce in this code 
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
    

    // const ExistItem = () => {
    //     const pervOrder = [...order, existOrder]
    //     if (pervOrder.id == id){
    //         let amountOfOrder =  pervOrder
    //     }
    // }

    let sumPriceOfProduct = order.reduce((acc , order) => acc + order.price, 0)
    console.log(sumPriceOfProduct , "it works ");
   // hur kan visa den på UI 


    return(
        <div>
            <ul className="cart-container">
            {order && order.map((item , x) => (
                <li className="cart-list" key={x}>
                    <IoCloseSharp className="x-btn"/>
                    <img className="cart-shop-img" src={item.picture} alt="" />
                   <h3 className="cart-name">{item.name}</h3>
                   {/* <p className="cart-description"> {item.description} </p> */}
                   <p className="cart-price"> {item.price} kr </p>
                   
                    
                </li>
                
            ) )}
            <hr className="tiner-line" />
                <div className="cart-summan">
                summan: <span>{sumPriceOfProduct}</span>
            </div>
            </ul>
        
        </div>
    )
}
   

export default Cart