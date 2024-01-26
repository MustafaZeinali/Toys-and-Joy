import { useState } from "react";
import addUser from "../../data/addUser.js";
import { shopId } from "../../data/constant.js";
import './RegisterUser.css';
const RegisterUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  

  console.log('it is adding 11...');
    
  const handleClick =  (e) => {
    e.preventDefault();
    console.log('it is clicking ...');
    if (password === repeatedPassword) {

    }
  addUser({shopid: shopId, username: username, password: password});
  
  }
 
  
  return (
    <div className="form-main">
      <article className="register">
        <h2>Register new user</h2>
        <form className="form-register">
          <section className="form-user">
            <label htmlFor="username">Username </label>
            <input type="text" name="username" id="username" autoComplete="username"  onChange={(e) => setUsername(e.target.value)} />
          </section>
          <section className="form-pass">
            <label htmlFor="password">Password </label>
            <input type="password" name="password" id="password" autoComplete="current-password"  onChange={(e) => setPassword( e.target.value)} />
          </section>
          <section className="form-repeated-pass">
            <label htmlFor="repeatpassword">repeat Password </label>
            <input type="password" name="repeatpassword" id="repeatpassword" autoComplete="current-password"  onChange={(e) => setRepeatedPassword( e.target.value)} />
          </section>
          <section>
          <button className="btn-register" onClick={handleClick}>Registera</button>
          </section>
        </form>
      
      </article>
    </div>
  );
};
//() => addUser(username, password)
export default RegisterUser;
