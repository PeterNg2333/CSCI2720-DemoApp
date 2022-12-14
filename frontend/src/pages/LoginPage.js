import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import WebLogInImage from "./Resource/LoginPage/WebLogInImage.png"




function LoginPage(){
    return(
        <main className='container-lg'>
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
        <section className='col-6 logInPictureBg'
            style={{backgroundImage: 'url("./Resource/LoginPage/WebLogInImage.png")'}}>
            HI
        <img src={WebLogInImage}></img>
        </section>
    );
}

// RHS of the login Pages in the protoype
function LoginForm(){
    return(
        <section className='col-6 logInFormBg'>HI</section>
    );
}

export default LoginPage;