const {
    getAllVenues,
    getVenuesByKeyword,
    addVenueToUserFavourite,
    getCommentsByVenue,
    createCommentByVenue,
} = require("../service/database/database");

async function getAllVenuesRoute(req, res) {
    const venues = await getAllVenues();
    res.send({
        data: venues,
    });
}

async function getVenuesByKeywordRoute(req, res) {
    const keyword = req.query.keyword;
    const venues = await getVenuesByKeyword(keyword);
    res.send({
        data: venues,
    });
}

// TODO
function addVenueToUserFavouriteRoute(req, res) {

}

async function getCommentsByVenueRoute(req, res) {
    const venueId = parseInt(req.query.venueId);
    const comments = await getCommentsByVenue(venueId);
    res.send({
        data: comments,
    })
}

async function addCommentByVenueRoute(req, res) {
    const {token, userId, venueId, commentText,} = req.body;
    if (token === token) { // TODO: verify token here
        await createCommentByVenue(userId, venueId, commentText);
        res.send({
            success: true,
        });
    } else {
        res.send({
            success: false,
        });
    }
}

module.exports = {
    getAllVenuesRoute,
    getVenuesByKeywordRoute,
    addVenueToUserFavouriteRoute,
    getCommentsByVenueRoute,
    addCommentByVenueRoute,
}
