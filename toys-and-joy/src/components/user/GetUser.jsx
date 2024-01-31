
import { useEffect ,useState } from "react";
import getUser from "../../data/getUser";
import "./GetUser.css"
const BringUser = () => {

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
        </div>
    )
}
export default BringUser