import { useContext, useEffect, useState } from "react";
import getUser from "../../data/getUser";
import "./GetUser.css";
import { useNavigate } from "react-router-dom";
import { ToyContext } from "../../routes/ContextRoot";
import AddProduct from "../addProduct/AddProduct";
import clearUser from "../../data/deleteUser";
import { shopId } from "../../data/constant";

const BringUser = () => {
  const { isLogined, setIsLogined } = useContext(ToyContext);
  const navigate = useNavigate();
  const [showUser, setShowUser] = useState([]);
  const [upadteUser, setUpadteUser] = useState([]);
  const { isLoggedOut , setIsLoggedOut } = useContext(ToyContext)
  // const [deleteUser, setDeleteUser] = useState({shopid: "", userid: ""});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUser();
        setShowUser(data);
        setIsLoggedOut(!isLoggedOut);
      } catch (err) {
        console.log("Error fetching", err);
      }
    };
    fetchData();
  }, []);

  const redigeraButton = () => {
    // console.log("is clicked from user1");
    if (isLogined == true) {
      // console.log("is clicked from user2");
      navigate("/product");
      // console.log("is clicked from user3");
    } else {
      console.log("fail");
    }
  };
  const deleteButton = async (userId) => {
    // console.log("show user id " , userId);
    const deleteData = await clearUser(userId);
    // console.log("it is deleteing?", deleteData);
    if (deleteData.success) {
    //    let newList = [...showUser,...upadteUser]
    //  const updateUserList = newList.filter((user) => user.id === userId);
    const index = showUser.findIndex((user)=> user.id===userId)
    if(index !== -1) {{
        const updateshowUser = [...showUser]
        updateshowUser.splice(index, 1)
        setShowUser(updateshowUser)
    }
    
    //  setUpadteUser(updateUserList);
    }
  };
}
  // useEffect(() => {
  //     // Additional actions after showUser state is updated
  //     console.log("ShowUser state updated:", showUser);
  // }, [showUser]);

  return (
    <div>
      <form className="u-container">
        <p className="loggar-ut" onClick={() => navigate(-1)}>logga ut</p>
        <article className="u-1">
          <h2>Users</h2>
          <section>
            {showUser &&
              showUser.map((user, i) => (
                <li key={i}>
                  <p>Användarnamn: {user.username}</p>
                  <button
                    type="button"
                    
                    onClick={() => deleteButton(user.id)}
                  >
                    Ta bort
                  </button>
                </li>
              ))}
          </section>
        </article>
      </form>
      <AddProduct />
      <button onClick={redigeraButton} className="btn-redigera">
        {" "}
        Redigera produkt{" "}
      </button>
    </div>
  );
};

export default BringUser
