import "./Login.css";
import verifyUser from "../../data/verifyUser.js";
import { IoCloseSharp, IoLogIn } from "react-icons/io5";
import { useContext, useState } from "react";
import { shopId } from "../../data/constant.js";
import { useNavigate } from "react-router-dom";
import { ToyContext } from "../../routes/ContextRoot";
import addUser from "../../data/addUser";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [repeatPassword , setRepeatPassword] = useState("");
  // const [showRepeatPassword , setShowRepeatPassword] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const { isLogined, setIsLogined } = useContext(ToyContext);

  const [registerUsername, setRegisterUsername] = useState("");
  const [registerpassword, setRegisterPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [validateUsername, setValidateUsername] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);
  const navigate = useNavigate();
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
      setIsLogined(true);
    }
  };

  // show login form
  const handleCreateAccount = () => {
    console.log("loginform is clicked");

    setShowRegisterForm(false);
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
    console.log("it is clicking ...");

    if (!validatePassword && !validateUsername) {
      if (registerUser && registerpassword == repeatedPassword) {
        addUser({
          shopid: shopId,
          username: registerUsername,
          password: registerpassword,
        });
        setRepeatedPassword();
      } else {
        console.log("its wronmg");
        setRepeatedPassword(false);
        console.log("repeated is wrong");
      }
    }
  };
  //validate register username
  const handleValidateRegisterUsername = (e) => {
    const updateUsername = e.target.value;
    setRegisterUsername(updateUsername);
    validationOfUsername(updateUsername);
  };
  const validationOfUsername = (value) => {
    const regexUsername = /^[a-öA-Ö]{2,20}$/;
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
  //todo put en variable for varje to work for sökning and other shit

  return (
    <div className="main-modal">
      <div className="form-modal" >
        <IoCloseSharp onClick={() => navigate(-1)} className="close-tag" />
        <h2>
          <span style={{fontSize: showRegisterForm ? "16px" : null }} onClick={handleCreateAccount}> inloggning </span>/
          <span style={{fontSize: !showRegisterForm ? "16px" : null}}  onClick={showRegisterFormClick}> Register</span>
        </h2>
        <form onSubmit={handleLogin}
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
          {isLogined ? <p>fel användernamn / lösenord</p> : null}
          <div>
            <button type="submit" className="log-btn" >
              Logga in
            </button>
          </div>

          {/* <div>
          <button type="button" className="create-account-btn" onClick={handleCreateAccount}> skaffa konto </button>
          </div> */}
        </form>
       
        <form 
          className="from-register modal" onSubmit={registerUser}
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
          </div>
          {repeatedPassword !==registerpassword && <p>sätt in rätt lösenord</p> }
          <div>
            <button type="submit" className="btn-register" >
              Registera
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
