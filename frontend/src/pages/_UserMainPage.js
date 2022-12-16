import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";
import UserNavBar from "../components/UserNavBar";
import { MapSection, VenueSection, LocationPage } from "./UserLocation";
import { UserEventLocationHead, UserEventList } from "./UserEventPage";
import { UserVenueFileCard, UserVenueFileCardFavorite, UserFavouriteVenueFileCard } from "./UserVenueFileCard";
import { UserCommentSection } from "./UserCommentSection";
import { useState } from "react";
import { backendUrl, googleMapApiKey } from "../variables";

/** Full webpage for the location page in user view e.g., http://localhost:3000/Location/ */
function UserMainLocation() {
  let venueName = useParams();
  return (
    <>
      <header className="row">
        <UserNavBar venue={String(venueName)} />
      </header>
      <main>
        <div className="row mt-1">
          {/* <MapSection />
          <VenueSection /> */}
          <LocationPage />
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

      <main className="row">
        <section className="col-lg-12">
          <div className="container-lg bg-light mt-3 pt-1 pb-4">
            <UserEventLocationHead />
            <UserCommentSection />
          </div>
          <br />
          <div className="container-lg mt-3 pb-1">
            <UserEventList />
          </div>
        </section>
      </main>
    </>
  );
}

/** Full webpage for the favorite page of all the liked location in user view e.g., http://localhost:3000/Location/ABC/Events */
function UserMainFavorite() {
  const [mapArray, setMapArray] = useState("");
  const [favouriteArray, setFavouriteArray] = useState("");
  var userId = 4;//hard code for test first, please delete

  fetch(`${backendUrl}/venue/favourite/user/?userId=${userId}`)
  .then((response) => response.json())
  .then((data) => {
    console.log("fav", data.data);
    setFavouriteArray(data.data);
  });

  /*
  fetch(`${backendUrl}/venue/all`)
  .then((response) => response.json())
  .then((data) => {
    let countArray = data.data.eventCount;
    // console.log("countArray", countArray);
    let tmp = data.data.venues;
    let i;
    for (i = 0; i < tmp.length; i++) {
      tmp[i].eventCount = countArray[tmp[i].venueId];
      // tmp[i].eventCount = i;
    }
    // console.log("tmp", tmp);
    setLocationArray(tmp);
    let tmpMap = data.data.venues.map((venue) => ({
      id: venue.venueId,
      name: venue.name,
      position: { lat: venue.latitude, lng: venue.longitude },
    }));
    // console.log("tmpMap", tmpMap);
    setMapArray(tmpMap);
  });
*/
  return (
    favouriteArray.length > 0 && (
    <>
      <header className="row">
        <UserNavBar  />
      </header>

      <main className="container-lg">
        <div className="row">
          <h2 className="text-center mt-4">
            {" "}
            <strong>My Favorite Venue</strong>
          </h2>
        </div>

        
        <br />

        
      </main>

      <section className="col-lg-12 ">
        <div className="container-fluid bg-light mt-4 pb-4  table-responsive table-bordered">

          <table className="col-5 table table-hover">
            <thead className="shadow shadow-sm border-bottom-1">
              <tr className="" style={{ textAlign: "center" }}>
                <th scope="col" colspan="2" className="border border-dark ">
                  <h3>
                    <strong>Locations</strong>
                  </h3>
                </th>
              </tr>
            </thead>

            <tbody className="mt-1">
              {favouriteArray.map((loc, index) => (
                <UserFavouriteVenueFileCard
                  data={loc}
                />
              ))}
            </tbody>
          </table>
        </div>

      </section>
      </>
    )
  );
}


export { UserMainLocation, UserMainEvents, UserMainFavorite };
