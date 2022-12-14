import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import userIcon from './Resource/LoginPage/user-icon.png'

function LoginPage(){
    return(
        <main className='container-xxl  w-100 p-4 mh-100"'>
            <div className='row'>
                <LoginPicture/>
                <LoginForm/>
            </div>
        </main>

    );
}

// LHS of the login Pages in the protoype
function LoginPicture(){
    
    return(
        <section className='col-lg-6 logInPictureBg'>
        </section>
    );
}

// RHS of the login Pages in the protoype
function LoginForm(){
    return(
        <section className='col-lg-6 logInFormBg border border-dark'>
        <div className='container h-100'><div className='row align-items-center h-100'>
            <div className='col-8 text-center mx-auto'>
                <h3 className>Hello! Welcome Back :{")"}</h3>
                <div><img className='img-fluid' src={userIcon} alt="img" style={{maxWidth: '50%', height: 'auto'}}/></div>
                <form action="/login" method="post">

                    <label for="username">Username</label><br/>
                    <input className="text" id="username" name="username" required/> <br/><br/>
                    <label for="password">Password</label><br/>
                    <input type="password" id="password" name="password" required/><br/>
                    <input className='mt-3' type="checkbox" name='rememberMe'/> Remember Me <br/> 
                    <input className='mt-4' type="submit" value="Login"/>
                </form>
            </div>
        </div></div></section>
        
    );
}

export default LoginPage;