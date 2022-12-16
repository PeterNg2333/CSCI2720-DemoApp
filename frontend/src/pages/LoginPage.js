import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
  Navigate,
} from "react-router-dom";
import userIcon from "./Resource/LoginPage/user-icon.png";
import { useState } from "react";
import { backendUrl } from "../variables";
import Cookies from 'js-cookie';


function LoginPage() {
  return (
    <main className='container-xxl  w-100 p-4 mh-100"'>
      <div className="row">
        <LoginPicture />
        <LoginForm />
      </div>
    </main>
  );
}

// LHS of the login Pages in the protoype
function LoginPicture() {
  return <section className="col-lg-6 logInPictureBg"></section>;
}

// RHS of the login Pages in the protoype
function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
    console.log("username =", event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log("password =", event.target.value);
  };
  const navigate = useNavigate();
  const fetchLogin = () => {
    console.log("fetchLogin")
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    Cookies.set('username', username);

    let urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
      credentials: 'same-origin',
    };

    fetch(`${backendUrl}/login`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if(result.error){
          alert("Login Fail");
        }else{
          if (result.isAdmin) {
            // go to admin page
            // navigate('/admin');
          } else {
            navigate("/location");
          }
        }
        
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <section className="col-lg-6 logInFormBg border border-dark">
      <div className="container h-100 mt-2">
        <div className="row align-items-center h-100">
          <div className="col-8 text-center mx-auto">
            <h3 className="mb-4">Hello! Welcome Back :{")"}</h3>
            <div>
              <img
                className="img-fluid d-none d-lg-inline d-xl-inline"
                src={userIcon}
                alt="img"
                style={{ maxWidth: "50%", height: "auto" }}
              />
            </div> 
            <label for="username" style={{fontWeight: "bold", float: "left"}}><h5>Username</h5></label>
            <br />
            <input
              className="form-control"
              id="username"
              name="username"
              onChange={handleUsername}
              value={username}
              required
            />
            <br/>
            <label for="password" style={{fontWeight: "bold", float: "left"}}><h5>Password</h5></label>
            <br />
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              onChange={handlePassword}
              value={password}
              required
            />
            
            <br />
            <span style={{ float: "left", marginTop:"-5px"}}>
            <input className="" type="checkbox" name="rememberMe" />{" "}
            Remember Me </span>
            <br />
            <button className="btn btn-primary btn-block mt-2" type="button" onClick={fetchLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
