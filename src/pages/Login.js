import React from "react";
import "../style.css";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Paras Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
        <p>
          You don't have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
