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
import {useCookies} from "react-cookie";

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
  const [cookies, setCookie, removeCookie] = useCookies(['userName']);

  const handleUsername = (event) => {
    setUsername(event.target.value);
    // console.log("username =", event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    // console.log("password =", event.target.value);
  };
  const navigate = useNavigate();
  const fetchLogin = () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    let urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(`${backendUrl}/login`, requestOptions)
      .then((response) => {
        // console.log("status code:", response.status);
        if (response.status !== 200) throw new Error(response.json());
        else return response.json();
      })
      .then((result) => {
        console.log(result)
        setCookie("userName", result.userName,{ path: '/' });
        if (result.isAdmin === true) {
          // go to admin page
          navigate('/admin_event');
        } else {
          navigate("/location");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <section className="col-lg-6 logInFormBg border border-dark">
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-8 text-center mx-auto">
            <h3 className="mb-4">Hello! Welcome Back :{")"}</h3>
            {/* <div>
              <img
                className="img-fluid"
                src={userIcon}
                alt="img"
                style={{ maxWidth: "50%", height: "auto" }}
              />
            </div> */}
            <label for="username">Username</label>
            <br />
            <input
              className="text"
              id="username"
              name="username"
              onChange={handleUsername}
              value={username}
              required
            />
            <br />
            <br />
            <label for="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              onChange={handlePassword}
              value={password}
              required
            />
            <br />
            <input className="mt-3" type="checkbox" name="rememberMe" />{" "}
            Remember Me <br />
            <button className="login-btn" onClick={fetchLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
