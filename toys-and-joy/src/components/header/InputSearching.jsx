import { useContext, useState } from "react"
import BringData from "../getProduct/GetProduct";
import { ToyContext } from "../../routes/ContextRoot";
const SearchItems = () => {
    const { allProducts , setAllProducts } = useContext(ToyContext)
    

    
    
    return(
        <section>
             <div className="search-item">
          <input type="text" value={searchItem} onChange={ filterProduct}  className="search-input" placeholder="Sök" />
          <IoSearchOutline className="search-icon" onClick={serachClick} />
        </div>
        {serachClick.map(item => (
            <li>
                <p>{item.name}</p>
            </li>
        ))}
        </section>
    )
}

export default SearchItems


import "./Login.css";
import verifyUser from "../../data/verifyUser.js";
import { IoCloseSharp, IoLogIn } from "react-icons/io5";
import { useContext, useState } from "react";
import { shopId } from "../../data/constant.js";
import { useNavigate } from "react-router-dom";
import { ToyContext } from "../../routes/ContextRoot";
import addUser from "../../data/addUser";
import RegisterUser from "../registerUser/RegisterUser";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const { isLogined, setIsLogined } = useContext(ToyContext);

  const [registerUsername, setRegisterUsername] = useState("");
  const [registerpassword, setRegisterPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [validateUsername, setValidateUsername] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const statusLogin = await verifyUser({
      username,
      password,
      shopid: shopId,
    });

    if (statusLogin.login === "success") {
      setIsLogined(!isLogined);
      navigate("/admin/users");
    } else {
      setIsLogined(true);
    }
  };

  const handleCreateAccount = () => {
    setShowRegisterForm(false);
  };

  const showRegisterFormClick = () => {
    setShowRegisterForm(true);
    setShowLoginForm(false);
  };

  const registerUser = (e) => {
    e.preventDefault();

    if (!validatePassword && !validateUsername) {
      if (registerUser && registerpassword === repeatedPassword) {
        addUser({
          shopid: shopId,
          username: registerUsername,
          password: registerpassword,
        });
        setRepeatedPassword("");
      } else {
        setRepeatedPassword("");
      }
    }
  };

  const handleValidateRegisterUsername = (e) => {
    const updateUsername = e.target.value;
    setRegisterUsername(updateUsername);
    validationOfUsername(updateUsername);
  };

  const validationOfUsername = (value) => {
    const regexUsername = /^[a-öA-Ö]{2,10}$/;
    if (!value.trim() || !regexUsername.test(value)) {
      setValidateUsername(true);
    } else {
      setValidateUsername(false);
    }
  };

  const handleValidateRegisterPassword = (e) => {
    const updatePassword = e.target.value;
    setRegisterPassword(updatePassword);
    validationOfPassword(updatePassword);
  };

  const validationOfPassword = (value) => {
    const regexPassword = /^[a-zA-Z0-9]{5,}$/;
    if (!value.trim() || !regexPassword.test(value)) {
      setValidatePassword(true);
    } else {
      setValidatePassword(false);
    }
  };

  return (
    <div className="main-modal">
      <form className="form-modal" onSubmit={handleLogin}>
        <IoCloseSharp onClick={() => navigate(-1)} className="close-tag" />
        <h2>
          <span onClick={handleCreateAccount}> inloggning </span>/
          <span onClick={showRegisterFormClick}> Register</span>
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
          {isLogined ? <p>fel användarnamn / lösenord</p> : null}
          <div>
            <button type="submit" className="log-btn">
              Logga in
            </button>
          </div>
        </section>
      </form>
      <form className="form-modal" onSubmit={registerUser}>
        <section
          className="register-from"
          style={{ display: !showRegisterForm ? "none" : "block" }}
        >
          <div className="form-user">
            <label htmlFor="register-username">Username </label>
            <input
              value={registerUsername}
              type="text"
              name="register-username"
              id="register-username"
              autoComplete="username"
              onChange={handleValidateRegisterUsername}
            />
            {validateUsername ? <p>fyll i rätt</p> : null}
          </div>
          <div className="form-pass">
            <label htmlFor="register-password">Password </label>
            <input
              value={registerpassword}
              type="password"
              name="register-password"
              id="register-password"
              onChange={handleValidateRegisterPassword}
            />
            {validatePassword ? <p>fyll i rätt</p> : null}
          </div>
          <div className="form-repeated-pass">
            <label htmlFor="repeatpassword">repeat Password </label>
            <input
              value={repeatedPassword}
              type="password"
              name="repeatpassword"
              id="repeatpassword"
              onChange={(e) => setRepeatedPassword(e.target.value)}
            />
            {repeatedPassword !== registerpassword && (
              <p>sätt in rätt lösenord</p>
            )}
          </div>
          <div>
            <button type="submit" className="btn-register">
              Registera
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Login;
