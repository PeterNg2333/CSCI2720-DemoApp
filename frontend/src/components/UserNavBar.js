import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

function UserNavBar (){
    let location = useLocation()
    return(
        <nav className="container-fluid navbar navbar-expand nav-user py-1">
            <div className="p-0">
                <button className="navbar-toggle btn ">
                    <i className="fa fa-chevron-left text-white"></i>
                </button>
                <button className="navbar-toggle btn ">
                    <i className="fa fa-chevron-right text-white"></i>
                </button>
                <span className="navbar-toggle nav-item-text "> &nbsp; &nbsp;  
                    <Link to="/Location" className="btn text-white px-0">{location.pathname}</Link>
                    <span className="text-white url">/abdc</span>
                </span>

            </div>

            <ul className="nav navbar-nav ms-auto">
                <li className="mx-1 nav-item ">
                    <Link to="/Location" className="nav-item-text">
                        <button className="btn navbar-btn nav-item-text text-white">
                            <i className="fa fa-light fa-home mr-2"> Home </i>
                        </button>
                    </Link>
                </li>
                <li className="mx-1 nav-item">
                    <Link to="main" className="nav-item-text">
                        <button className="btn navbar-btn nav-item-text text-white">
                            <i className="fa fa-regular fa-heart mr-2"> Favorite </i>
                        </button>
                    </Link>
                </li>
            </ul>

            <button className="btn navbar-btn nav-item-text text-white no-click">
                <i className="fa fa-light fa-user mr-1"> Hi!, [User Name] </i>
            </button>

            <button className="btn navbar-btn nav-item-text text-white" >
                Log Out<i className="fa fa-thin fa-sign-out mx-1"> </i>
            </button>
        </nav>
    );
}
export default UserNavBar ;