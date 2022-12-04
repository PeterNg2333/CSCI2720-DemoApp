const mongoose = require("mongoose");
const {userSchema, commentSchema, venueSchema, eventSchema} = require("./schema");

const DATABASE_CONNECT_STRING = "mongodb://localhost:27017/csci2720project";
mongoose.connect(DATABASE_CONNECT_STRING);

const userModel = mongoose.model("User", userSchema);
const commentModel = mongoose.model("Comment", commentSchema);
const venueModel = mongoose.model("Venue", venueSchema);
const eventModel = mongoose.model("Event", eventSchema);

async function countEventsInVenue(venueId) {
    return await eventModel
        .count({"venueId": venueId})
        .exec();
}

async function getAllVenues() {
    const venues = await venueModel
        .find({})
        .exec();

    return venues.map(venue => (
        {
            name: venue.name,
            latitude: venue.latitude,
            longitude: venue.longitude,
        }
    ));
}

async function getVenuesByKeyword(keyword) {
    const venues = await venueModel
        .find({"name": {"$regex": keyword}})
        .exec();

    return venues.map(venue => (
        {
            name: venue.name,
            latitude: venue.latitude,
            longitude: venue.longitude,
        }
    ));
}

async function addVenueToUserFavourite(userId, venueId) {

}

async function getCommentsByVenue(venueId) {
    const comments = await commentModel
        .find({"venueId": venueId})
        .exec();

    return comments.map(comment => (
        {
            userId: comment.userId,
            venueId: comment.venueId,
            text: comment.text,
        }
    ))
}

// **** add more functions here to extend the database interfaces ****


// getVenuesByKeyword("cuhk").then(e => console.log(e))
getCommentsByVenue(1).then(e => console.log(e))
countEventsInVenue(1).then(e => console.log(e))

module.exports = {
    getAllVenues,
    getVenuesByKeyword,
    addVenueToUserFavourite,
    getCommentsByVenue,
};
