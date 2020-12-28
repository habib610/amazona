import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        
    }
   
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <h2>Sign In</h2>
        <div>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Your Password</label>
          <input
          placeholder="Enter Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            id="password"
          />
        </div>
        <div>
            <label />
            <button className="primary" type="submit">SignIn</button>
        </div>
        <div>
            <label />
            <div>
            New Customer ? 
            <Link to="/register"> Create an account</Link>
            </div>
           
        </div>
      </form>
    </div>
  );
};

export default SignIn;
