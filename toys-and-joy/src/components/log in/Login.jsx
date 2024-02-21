import "./Login.css";
import verifyUser from "../../data/verifyUser.js";
import { IoCloseSharp } from "react-icons/io5";
import { useContext, useState } from "react";
import { shopId } from "../../data/constant.js";
import { useNavigate } from "react-router-dom";
import { ToyContext } from "../../routes/ContextRoot";
import addUser from "../../data/addUser";
import RegisterUser from "../registerUser/RegisterUser";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [repeatPassword , setRepeatPassword] = useState("");
  // const [showRepeatPassword , setShowRepeatPassword] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const { isLogined, setIsLogined } = useContext(ToyContext);
  const navigate = useNavigate();
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerpassword, setRegisterPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  


  // user or admin login 
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

  // show login form
  const handleCreateAccount = () => {
    console.log("loginform is clicked");
    
    setShowRegisterForm(false)

    
  };

  // show register form
  const showRegisterFormClick = () => {
    setShowRegisterForm(true);
    setShowLoginForm(false);
    console.log("register form clicked");
  };

  // register new User
  const registerUser = (e) => {
    e.preventDefault();
    console.log('it is clicking ...');
    if (password === repeatedPassword) {
      
    }
    addUser({shopid: shopId, username: registerUsername, password: registerpassword});

  
  }
 
  return (
    

    
    <div className="main-modal">
      <form className="form-modal">
        <IoCloseSharp onClick={() => navigate(-1)} className="close-tag" />
        <h2>
          <span onClick={handleCreateAccount}> inloggning </span>/
          <span onClick={showRegisterFormClick} > Register</span>
        </h2>
        <section
          className="modal"
          style={{ display: showRegisterForm ? "none" : "block" }}
        >
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


          {/* <div>
          <button type="button" className="create-account-btn" onClick={handleCreateAccount}> skaffa konto </button>
          </div> */}
        </section>
        <div>
          {" "}
          {/* {!showLoginForm ? showRegisterForm && <RegisterUser /> : null}{" "} */}
        </div>
        <section className="register-from" style={{ display: !showRegisterForm ? "none" : "block" }} >
         <div className="form-user"  >
              <label htmlFor="register-username">Username </label>
              <input
              value={registerUsername}
                type="text"
                name="register-username"
                id="register-username"
                autoComplete="username"
                onChange={(e) => setRegisterUsername(e.target.value)}
              />
            </div>
            <div className="form-pass">
              <label htmlFor="register-password">Password </label>
              <input
              value={registerpassword}
                type="password"
                name="register-password"
                id="register-password"
                autoComplete="current-password"
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </div>
            <div className="form-repeated-pass">
              <label htmlFor="repeatpassword">repeat Password </label>
              <input
              value={repeatedPassword}
                type="password"
                name="repeatpassword"
                id="repeatpassword"
                autoComplete="current-password"
                onChange={(e) => setRepeatedPassword(e.target.value)}
              />
            </div>
            <div>
              <button className="btn-register" onClick={registerUser}>
                Registera
              </button>
            </div>
            </section>
      </form>
      
      </div>

    

    
    
  );
};

export default Login;
