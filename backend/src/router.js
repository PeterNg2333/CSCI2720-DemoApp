const {
    getAllVenuesRoute,
    getVenuesByKeywordRoute,
    addVenueToUserFavouriteRoute,
    getCommentsByVenueRoute,
    addCommentByVenueRoute,
} = require("./route/database");

function mountRouter(app) {
    app.get("/", (req, res) => res.send("Hello world"));

    app.get("/venue/all", getAllVenuesRoute);
    app.get("/venue/all/keywords", getVenuesByKeywordRoute);
    app.post("/venue/add/favourite", addVenueToUserFavouriteRoute);
    app.get("/comment/get/venue", getCommentsByVenueRoute);
    app.post("/comment/add/venue", addCommentByVenueRoute);
}

module.exports = {mountRouter}
