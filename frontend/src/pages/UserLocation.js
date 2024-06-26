import React from "react";
import {
  UserVenueFileCard,
  UserVenueFileCard_favorite,
} from "./UserVenueFileCard";
import Map from "../components/Map";
import { useLoadScript } from "@react-google-maps/api";
import { backendUrl, googleMapApiKey } from "../variables";

function MapSection() {
  console.log(`${backendUrl}/venue/all`);
  fetch(`${backendUrl}/venue/all`)
    .then((response) => response.json())
    .then((data) => console.log(data));
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapApiKey, // this is Janice's personal API key
  });
  return isLoaded ? (
    <section className="col-lg-6">
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
  return (
    <section className="col-lg-6 ">
      <div className="container-fluid bg-light mt-4 pb-4  table-responsive table-bordered">
        <table className="col-5 table mt-3 table-hover">
          <thead className="shadow shadow-sm border-bottom-1">
            <tr className="" style={{ textAlign: "center" }}>
              <th scope="col" colspan="2" className="border border-dark ">
                <h3>
                  <strong>Locations </strong>
                </h3>
              </th>
              <th scope="col" className="border border-dark ">
                <h3>
                  <strong>What's on</strong>
                </h3>
              </th>
            </tr>
          </thead>

          <tbody className="mt-1">
            <UserVenueFileCard />
            <UserVenueFileCard />
            <UserVenueFileCard />
            <UserVenueFileCard />
            <UserVenueFileCard />
            <UserVenueFileCard />
            <UserVenueFileCard />
            <UserVenueFileCard />
            <UserVenueFileCard />
            <UserVenueFileCard />
          </tbody>
        </table>
      </div>
    </section>
  );
}

export { MapSection, VenueSection };
