import React, { useEffect, useState } from "react";
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
import { backendUrl } from "../variables";

/** Components for comment section in Event Page
 * UserCommentSection: show the comment history
 * UserCommentInput: allow user to input comment
 * UserCommentI one user comment (used by UserCommentSection)
 */

function UserCommentSection(props) {
  return (
    <div className="row">
      <div
        className="mt-2"
        style={{ margin: "-10px", height: "200px", overflowY: "auto" }}
      >
        <UserComment />
        <UserComment />
      </div>
    </div>
  );
}

function UserCommentInput() {
  const [input, setInput] = useState("");
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  useEffect(() => {
    listComment();
  });
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const addComment = () => {
    var userId = sessionStorage.getItem("userId");
    const venueId = params.get("venueId");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("userId", userId);
    urlencoded.append("venueId", venueId);
    urlencoded.append("commentText", input);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(`${backendUrl}/venue/comment/create`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setInput("");
      })
      .catch((error) => console.log("error", error));
  };

  const listComment = () => {
    const venueId = params.get("venueId");
    fetch(`${backendUrl}/venue/comment/get/?venueId=${venueId}`)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <div class="mb-3">
      <div>
        <textarea
          rows="2"
          id="commentInput"
          className="form-control"
          placeholder="Add a comment..."
          onChange={handleInput}
          value={input}
        ></textarea>
        <button
          type="button"
          className="btn btn-dark me-2 block"
          onClick={addComment}
        >
          Post
        </button>
      </div>
    </div>
  );
}

function UserComment() {
  return (
    <div class="d-flex mt-2">
      <div class="flex-shrink-0">
        <svg height="60" width="60">
          <g>
            <circle cx="35" cy="35" r="25" fill="#d4d6dbd7" />
            <text
              x="28"
              y="45"
              font-family="Verdana"
              font-size="30"
              fill="Black"
            >
              P
            </text>
          </g>
        </svg>
      </div>

      <div height="100" class="flex-grow-1">
        <h5 class="mt-2 ms-2 mb-0">
          <b>Peter </b>
        </h5>
        <p class="mt-1 ms-3 mb-0">
          {" "}
          Hi, testing! testing!testing!testing! testing!testing!testing!
          testing!testing!testing! testing!testing! Testing! testing!{" "}
        </p>
        <hr className="p-0 m-1" />
      </div>
    </div>
  );
}

export { UserCommentSection, UserCommentInput };
