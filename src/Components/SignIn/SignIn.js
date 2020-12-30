import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { singInActions } from "../Actions/userActions";
import MessageBox from "../Home/MessageBox";
import Loading from "../Products/Loading";

const SignIn = (props) => {
  const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(singInActions(email, password));
    }
    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
    
    const userSignIn = useSelector(state=> state.userSignIn);
    const {userInfo, loading, error} = userSignIn;


    useEffect(()=> {
      if(userInfo) {
        props.history.push(redirect)
      }
    }, [userInfo, redirect, props.history])
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
        <h2>Sign In</h2>
        </div>
        {
            loading && (<Loading></Loading>) 
        }
        {
           error  && <MessageBox variant="danger">{error}</MessageBox>
        }
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
