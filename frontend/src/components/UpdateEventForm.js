import PropTypes from "prop-types";
import AdminEventCard from "./AdminEventCard";
import React from "react";

function UpdateEventForm() {

    return (
        <div className="update-form-container">
            <div>
                <div>ds</div>
                <div className="d-flex justify-content-start ">
                    <div className="border border-dark m-2">Description</div>
                    <div className="border border-dark m-2">Location</div>
                </div>
                <div className="row">
                    <div className="scrollable-div">


                    </div>
                </div>
            </div>
        </div>
    )
}

AdminEventCard.propTypes = {};

export default UpdateEventForm;