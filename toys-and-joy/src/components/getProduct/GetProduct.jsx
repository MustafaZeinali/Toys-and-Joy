
import { useEffect , useState } from "react";
import { url , shopId } from "../../data/constant";
import {getProducts} from "../../data/getProduct.js";

function BringData(){
    const [ data , setData ] = useState([]);

    useEffect( () =>{
        async function fetchData (){
            const response = await fetch(url)
            const dataOfSerach = await response.json()
            console.log('data from api' , dataOfSerach);
            setData(data.productid,shopId)
        }
        fetchData()
    }, [])

    return(
        <section>
            <ul> {data.map((product) => (
                    <li key={product.id}>{product.name}</li></ul>
        </section>
    )
}


export default BringData