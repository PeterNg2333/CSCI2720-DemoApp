import React from 'react';
import {BrowserRouter, Route, Routes, Link, useParams, useLocation} from 'react-router-dom';
import UserNavBar from "./UserNavBar";
import UserLocation from "./UserLocation"

function UserMainLocation(){
    let venueName = useParams();
    return(
        <>
            <header ><UserNavBar venue={String(venueName)}/></header>
            <main><UserLocation/></main>
        </>
    );
}

export default UserMainLocation;