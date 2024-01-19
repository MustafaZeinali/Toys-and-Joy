import "./Login.css";
const Login = () => {
  return (
    <div>
      <section className="modal">
        <div className="admin-input">
          <label htmlFor="admin">Admin</label>
          <input type="text" id="admin" />
        </div>
        <div className="password-input">
          <label htmlFor="password">Lösenord</label>
          <input type="text" id="password" />
        </div>
        <div >
          <button type="button" className="log-btn">Logga in</button>
        </div>
      </section>
    </div>
  );
};

export default Login;
