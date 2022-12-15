import React, { useEffect } from "react";
import {
  UserVenueFileCard,
  UserVenueFileCard_favorite,
} from "./UserVenueFileCard";
import Map from "../components/Map";
import { useLoadScript } from "@react-google-maps/api";
import { useState } from "react";
import { backendUrl, googleMapApiKey } from "../variables";

function MapSection() {
  const [mapArray, setMapArray] = useState("");
  useEffect(() => {
    fetch(`${backendUrl}/venue/all`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          // console.log(data.data.venues);
          setMapArray(data.data.venues);
        });
  }, []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapApiKey, // this is Janice's personal API key
  });
  return isLoaded ? (
      <section className="col-lg-7">
        <div className="align-middle bg-light mt-4 pb-4">
          <div className="row mb-4">
            <form className="form-group col-8 mx-3 mr-0 my-3">
              <div className="rounded input-group">
                <input
                    type="search"
                    className="form-control"
                    placeholder="Find Venue"
                />
                <button className="btn navbar-btn bg-dark nav-item-text ">
                  <i class="fa fa-regular fa-search"></i>
                </button>
              </div>
            </form>

            <form className="form-group col-3 mr-3 my-3 p-0 pt-1 d-inline">
              <select class="form-select rounded input-group" aria-label="">
                <option selected>Sort by </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </form>
          </div>

          <div className="row rounded-top border border-dark b-3 mx-3 mt-3">
            <Map />
          </div>
        </div>
      </section>
  ) : null;
}

function VenueSection() {
  const [locationArray, setLocationArray] = useState("");
  const [favouriteArray, setFavouriteArray] = useState("");
  useEffect(() => {
    fetch(`${backendUrl}/venue/all`)
      .then((response) => response.json())
      .then((data) => {
        setLocationArray(data.data.venues);
      });
  }, []);
  useEffect(() => {
    var userId = sessionStorage.getItem("userId");
    // console.log("session", userId);
    fetch(`${backendUrl}/venue/favourite/user/?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("fav", data.data);
        setFavouriteArray(data.data);
      });
  }, []);
  return (
    locationArray.length > 0 && (
      <section className="col-lg-5 ">
        <div className="container-fluid bg-light mt-4 pb-4  table-responsive table-bordered">
          <table className="col-5 table mt-3 table-hover">
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
              {locationArray.map((loc, index) => (
                <UserVenueFileCard data={loc} favourite={favouriteArray} />
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className="container-fluid bg-light mt-4 pb-4">
          <h4 className="mx-2">Locations</h4>
          <div className="mx-2">
            {locationArray.map((loc, index) => (
              <UserVenueFileCard data={loc} />
            ))}
          </div>
        </div> */}
      </section>
    )
  );
}

export { MapSection, VenueSection };
