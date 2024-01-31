import "./Login.css";
import verifyUser from "../../data/verifyUser.js"; 
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { shopId } from "../../data/constant.js";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")

  const navigate = useNavigate()
 
  const handleLogin = async(e) => {
    e.preventDefault();
    const statusLogin = await verifyUser({username, password , shopid:shopId})
    console.log(statusLogin);

    if(statusLogin.login === "success"){
      console.log('you logged in successfully');
      navigate("/admin/users")
    }else{
      console.log('you failed');
    }
  }

  return (
    <div className="main-modal">
      <form  className="form-modal">
      <IoCloseSharp onClick={window.close} className="close-tag"/>
        <h2>inloggning</h2>
        <section className="modal">
          <div className="admin-input">
            <label htmlFor="admin">Admin</label>
            <input type="text" id="admin" value={username}
            onChange={e => setUsername(e.target.value)}/>
          </div>
          <div className="password-input">
            <label htmlFor="password">Lösenord</label>
            <input type="text" id="password" value={password}
            onChange={e => setPassword(e.target.value)}/>
          </div>
          <div>
            <button type="button" className="log-btn" onClick={handleLogin}>
              Logga in
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Login;
