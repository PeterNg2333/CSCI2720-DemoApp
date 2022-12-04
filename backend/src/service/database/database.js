const mongoose = require("mongoose");
const {userSchema, commentSchema, venueSchema, eventSchema} = require("./schema");

const DATABASE_CONNECT_STRING = "mongodb://localhost:27017/csci2720project";
mongoose.connect(DATABASE_CONNECT_STRING);

const userModel = mongoose.model("User", userSchema);
const commentModel = mongoose.model("Comment", commentSchema);
const venueModel = mongoose.model("Venue", venueSchema);
const eventModel = mongoose.model("Event", eventSchema);

async function countEventsInVenue(venueId) {

}

async function getAllVenues() {

}

async function getVenuesByKeyword(keyword) {

}

async function addVenueToUserFavourite(userId, venueId) {

}

async function getCommentsByVenue(venueId) {

}


module.exports = {};
