import React from "react";
import {BrowserRouter,Route,Routes,Link,useParams,useLocation} from "react-router-dom";
import UserNavBar from "../components/UserNavBar";
import { MapSection, VenueSection } from "./UserLocation";
import { UserEventLocationHead, UserEventList } from "./UserEventPage";
import { UserVenueFileCardFavorite } from "./UserVenueFileCard";
import { UserCommentSection } from "./UserCommentSection";

/** Full webpage for the location page in user view e.g., http://localhost:3000/Location/ */
function UserMainLocation() {
  let venueName = useParams();
  return (
    <>
      <header className="row">
        <UserNavBar venue={String(venueName)} />
      </header>
      <main className="container-lg">
        <div className="row mt-1">
          <MapSection />
          <VenueSection />
        </div>
      </main>
    </>
  );
}


/** Full webpage for the event page of particular location in user view e.g., http://localhost:3000/Location/ABC/Events */
function UserMainEvents() {
  let venueName = useParams();
  return (
    <>
    <header className="row">
        <UserNavBar venue={String(venueName)} />
    </header>

    <main className="row"><section className="col-lg-12">

        <div className="container-lg bg-light mt-3 pt-1 pb-4">
            <UserEventLocationHead />
            <UserCommentSection />
        </div>
        <br/>
        <div className="container-lg mt-3 pb-1">
            <UserEventList />
        </div>
        
    </section></main>
    </>
  );
}



/** Full webpage for the favorite page of all the liked location in user view e.g., http://localhost:3000/Location/ABC/Events */
function UserMainFavorite() {
  let venueName = useParams();
  return (
    <>
    <header className="row">
        <UserNavBar venue={String(venueName)} />
    </header>

    <main className="container-lg">
      <div className='row'>
        <h2 className="text-center mt-4"> <strong>My Favorite Venue</strong></h2>
      </div>

      <div className='row' >

        <form className='form-group col-9 mr-0 mt-3 '>
          <div className="rounded input-group">
            <input type="search" className="form-control" placeholder="Find Events"/>
            <button className='btn navbar-btn bg-dark nav-item-text '>
              <i class="fa fa-regular fa-search"></i>
            </button>     
          </div>
        </form>

        <form className='form-group col-3 mt-3 p-0 pt-1 d-inline'>
          <select className="form-select rounded input-group" aria-label="">
            <option selected>Sort by </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </form>

        </div><br/>

        <div className="row">
          <UserVenueFileCardFavorite cardOrder={"AB"}/>
          <UserVenueFileCardFavorite  cardOrder={"BA"}/>
          <UserVenueFileCardFavorite  cardOrder={"AB"}/>
          <UserVenueFileCardFavorite  cardOrder={"BA"}/>
          <UserVenueFileCardFavorite  cardOrder={"AB"}/>
          <UserVenueFileCardFavorite  cardOrder={"BA"}/>
        </div>
    </main>
    </>
  );
}

export { UserMainLocation, UserMainEvents, UserMainFavorite};
