import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";
import { UserEventFileCardRegular } from "./UserEventFileCard";
import placeholder_canRemove from "./placeholder_canRemove.png";
import { UserCommentSection, UserCommentInput } from "./UserCommentSection";
import Map from "../components/Map";

/** Components for Event Pages http://localhost:3000/Location/ABC/Events
 */

/**
 * UserEventLocationHead: Information of the location e.g. address, map and Comment input box
 */
function UserEventLocationHead() {
  const markers = [
    {
      id: 1,
      name: "Chicago, Illinois",
      position: { lat: 41.881832, lng: -87.623177 },
    },
  ];
  const fetchLocation = () => {};
  return (
    <div className="row mt-3">
      <div className="col-7">
        <h2 style={{ color: "#181E84" }}>Location A</h2>

        <div className="row">
          <p className="mx-3 mt-3">
            <i className="fa fa-map"></i> This is a address
          </p>
          <p className="mx-3">
            <i className="fa fa-info"></i> This is some information about the
            location
          </p>
        </div>

        <div className="row">
          <UserCommentInput />
        </div>
        <UserCommentSection />
      </div>

      <div className="row col-5">
        <Map markers={markers} style={{ width: "100vw", height: "50vh" }} />
      </div>
    </div>
  );
}

/**
 * UserEventLocationHead: A list of event and searching bar
 */
function UserEventList(props) {
  return (
    <section className="pb-3">
      <h2 className="m-3 text-center">Upcoming Events</h2>
      <div className="row">
        <form className="form-group col-8 mx-3 mr-0 mt-3">
          <div className="rounded input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Find Events"
            />
            <button className="btn navbar-btn bg-dark nav-item-text ">
              <i class="fa fa-regular fa-search"></i>
            </button>
          </div>
        </form>

        <form className="form-group col-3 mr-3 mt-3 p-0 pt-1 d-inline">
          <select class="form-select rounded input-group" aria-label="">
            <option selected>Sort by </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </form>
      </div>
      <br />

      <div className="row">
        <UserEventFileCardRegular />
        <UserEventFileCardRegular />
        <UserEventFileCardRegular />
        <UserEventFileCardRegular />
        <UserEventFileCardRegular />
      </div>
    </section>
  );
}

export { UserEventLocationHead, UserEventList };
