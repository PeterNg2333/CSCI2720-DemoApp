import React from 'react';
import {BrowserRouter, Route, Routes, Link, useParams, useLocation} from 'react-router-dom';
import UserNavBar from "./UserNavBar";
import {MapSection, VenueSection} from "./UserLocation"
import {UserEventAddress, UserEventList} from "./UserEventPage"

function UserMainLocation(){
    let venueName = useParams();
    return(<>
        <header className='row'>
            <UserNavBar venue={String(venueName)}/>
        </header>
        <main className='row'>
            <MapSection/>
            <VenueSection/>
        </main>
    </>);
}

function UserMainEvents(){
    let venueName = useParams();
    return(<>
        <header className='row'>
            <UserNavBar venue={String(venueName)}/>
        </header>
        <main className='row'>
            <UserEventAddress/>
            <UserEventList/>
        </main>
    </>);
}


export {UserMainLocation, UserMainEvents};