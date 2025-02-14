import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Foot from "../Components/Foot";

function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    
    window.sessionStorage.setItem("UserName", userName);
    window.sessionStorage.setItem("Password", password);
    
    
    navigate("/loginn");
  };

  return (
    <>
    
<div className="RegisterMain">
<h1 id="allatRegister">Shopy</h1>
  <form id="rform" onSubmit={handleSubmit}>
    <h2 id="registerTitle">Register Page</h2>
    <table id="registerTable">
      <tbody>
        <tr>
          <td>
            <label htmlFor="regUserName">UserName</label>
          </td>
          <td>
            <input
              type="text"
              placeholder="no special characters"
              id="regUserName"
              name="UserName"
              pattern="[A-Za-z0-9]{5,12}"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="regPassword">Password</label>
          </td>
          <td>
            <input
              type="password"
              placeholder="Combination case"
              name="Password"
              id="regPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </td>
        </tr>
        <tr>
          <td>
            <input type="submit" id="registerSubmit" value="Register" required />
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</div>
    <Foot />
    </>
  );
}

export default Register;
