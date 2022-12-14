import React from "react";
import {BrowserRouter,Route,Routes,Link,useParams,useLocation} from "react-router-dom";
import UserNavBar from "../components/UserNavBar";
import { MapSection, VenueSection } from "./UserLocation";
import { UserEventLocationHead, UserEventList } from "./UserEventPage";
import { UserCommentSection } from "./UserCommentSection";

function UserMainLocation() {
  let venueName = useParams();
  return (
    <>
      <header className="row">
        <UserNavBar venue={String(venueName)} />
      </header>
      <main className="row">
        <MapSection />
        <VenueSection />
      </main>
    </>
  );
}




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

export { UserMainLocation, UserMainEvents};
