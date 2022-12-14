import React from 'react';
import {BrowserRouter, Route, Routes, Link, useParams, useLocation} from 'react-router-dom';
import UserNavBar from "./UserNavBar";
import {MapSection, VenueSection} from "./UserLocation"
import {UserEventLocationHead, UserEventList} from "./UserEventPage"
import {UserCommentSection} from './UserCommentSection';

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

        <div className='row'><main className='col-lg-12'>

            <section className='container-lg bg-light mt-3 pt-1 pb-4' >
                <UserEventLocationHead/>
                <UserCommentSection/>
            </section>

            <section className='container-lg bg-light mt-3 pt-1 pb-4' >
                <UserEventList/>
            </section>

        </main></div>
    </>);
}


export {UserMainLocation, UserMainEvents};