import "./Login.css";
import verifyUser from "../../data/verifyUser.js";
import { IoCloseSharp } from "react-icons/io5";
import { useContext, useState } from "react";
import { shopId } from "../../data/constant.js";
import { useNavigate } from "react-router-dom";
import { ToyContext } from "../../routes/ContextRoot";
import RegisterUser from "../registerUser/RegisterUser";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [repeatPassword , setRepeatPassword] = useState("");
  // const [showRepeatPassword , setShowRepeatPassword] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const { isLogined , setIsLogined, isInvisible ,setIsInvisible } = useContext(ToyContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const statusLogin = await verifyUser({
      username,
      password,
      shopid: shopId,
    });
    console.log(statusLogin);

    if (statusLogin.login === "success") {
      console.log("you logged in successfully");
      setIsLogined(!isLogined);
      navigate("/admin/users");
    } else {
      console.log("you failed");
    }
  };

  const handleCreateAccount = () => {
    setShowRegisterForm(true)
    setShowLoginForm(false); 
  }

  const showLogin = () => {
    setIsInvisible(!isInvisible);
    console.log('it is login');
  }

  return (
    <div className="main-modal">
      { showLoginForm && <form className="form-modal">
        <IoCloseSharp onClick={() => navigate.goBack()} className="close-tag" />
        <h2>
          <span> inloggning  </span>/<span> Register</span>
        </h2>
        <section className="modal">
          <div className="admin-input">
            <label htmlFor="admin">Admin</label>
            <input
              type="text"
              id="admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="password-input">
            <label htmlFor="password">Lösenord</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
      
        
          <div>
            <button type="button" className="log-btn" onClick={handleLogin}>
              Logga in
            </button>

          </div>
          <div>  { showRegisterForm && <RegisterUser/> }  </div>
          <div>
          <button type="button" className="create-account-btn" onClick={handleCreateAccount}> skaffa konto </button>
          </div>
          
        </section>
      </form> }
    </div> 
  );
};

export default Login;
