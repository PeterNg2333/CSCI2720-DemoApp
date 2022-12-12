import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

class UserNavBar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand bg-primary">
            <div>
                <button className="navbar-toggle btn">
                    <i className="fa fa-chevron-left text-white"></i>
                </button>
                <button className="navbar-toggle btn">
                    <i className="fa fa-chevron-right text-white"></i>
                </button>
            </div>
            <ul className="nav navbar-nav ms-auto">
                <li className="mx-4 nav-item"><Link to="/" className="nav-item-text">Home</Link></li>
                <li className="mx-4 nav-item"><Link to="main" className="nav-item-text">Favourite locations</Link></li>
                <li className="mx-4 nav-item"><Link to="/" className="nav-item-text">User Name</Link></li>
            </ul>
            <button className="btn navbar-btn nav-item-text">Log Out</button>
        </nav>
        );
    }
}
export default UserNavBar ;