const {
    getAllEventsByVenueRoute,
    createEventRoute,
    updateEventRoute,
    deleteEventRoute,

    getOneVenueRoute,
    getAllVenuesRoute,
    getVenuesByKeywordRoute,
    getUserFavouriteVenuesRoute,
    addVenueToUserFavouriteRoute,
    removeVenueFromUserFavouriteRoute,
    getCommentsByVenueRoute,
    addCommentByVenueRoute,
} = require("./route/database");

const { checkIn, createUser} = require("./route/login_database");

function mountRouter(app) {

    //app.get("/", (req, res) => res.send("Hello world"));
    app.get("/login", (req, res) => res.sendFile(__dirname + "/loginpage.html"));
    app.get("/mainpage", (req, res) => res.sendFile(__dirname + "/mainpage.html"));
    app.get("/adminpage", (req, res) => res.sendFile(__dirname + "/adminpage.html"));
    app.post("/login", checkIn);
    app.post("/login/creat", createUser);

    app.get("/event/venue/all", getAllEventsByVenueRoute);
    app.post("/event/create", createEventRoute);
    app.post("/event/update", updateEventRoute);
    app.post("/event/delete", deleteEventRoute);

    app.get("/venue/one", getOneVenueRoute);
    app.get("/venue/all", getAllVenuesRoute);
    app.get("/venue/all/keywords", getVenuesByKeywordRoute);
    app.get("/venue/favourite/user", getUserFavouriteVenuesRoute);
    app.post("/venue/favourite/add", addVenueToUserFavouriteRoute);
    app.post("/venue/favourite/remove", removeVenueFromUserFavouriteRoute);

    app.get("/venue/comment/get", getCommentsByVenueRoute);
    app.post("/venue/comment/create", addCommentByVenueRoute);

    app.all("/*", (req, res) => res.redirect("/login"));
}


module.exports = {mountRouter}
