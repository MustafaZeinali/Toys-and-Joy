
import { useContext, useEffect ,useState } from "react";
import getUser from "../../data/getUser";
import "./GetUser.css"
import { useNavigate } from "react-router-dom";
import { ToyContext } from "../../routes/ContextRoot";
import AddProduct from "../addProduct/AddProduct";
const BringUser = () => {
    const {isLogined ,setIsLogined} = useContext(ToyContext);
    const navigate = useNavigate();
    const [showUser , setShowUser] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUser();
                setShowUser(data);
            }catch (err){
                console.log('Error fetching', err);
            }
        }
        fetchData();
    },[]);

    const redigeraButton = () => {
        console.log("is clicked from user1");
       if(isLogined == true ) {
        console.log("is clicked from user2");
        navigate("/product")
        console.log("is clicked from user3");
        }else{
            console.log('fail');
        }
    }
    return(
        <div>
            <form className="u-container">
            <article className="u-1">
                <h2>Users</h2>
                <section>
                    {showUser && showUser.map((user, i) => (
                         <li key={i}>
                        <p>Användarnamn: {user.username}</p>
                        <button>Ta bort</button>
                    </li>) )}
                    
                </section>
               
            </article>
            
            </form>
            <AddProduct/>
            <button onClick ={redigeraButton} className="btn-redigera" > Redigera produkt </button>
        </div>
    )
}
export default BringUser