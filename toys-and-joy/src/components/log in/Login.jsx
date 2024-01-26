import "./Login.css";
import { IoCloseSharp } from "react-icons/io5";
const Login = () => {

 

  return (
    <div className="main-modal">
      <article className="form-modal">
      <IoCloseSharp onClick={window.close} className="close-tag"/>
        <h2>inloggning</h2>
        <section className="modal">
          <div className="admin-input">
            <label htmlFor="admin">Admin</label>
            <input type="text" id="admin" />
          </div>
          <div className="password-input">
            <label htmlFor="password">Lösenord</label>
            <input type="text" id="password" />
          </div>
          <div>
            <button type="button" className="log-btn">
              Logga in
            </button>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Login;
