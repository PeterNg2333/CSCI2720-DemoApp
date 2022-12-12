const { response } = require("express");
const {
    getAllVenuesRoute,
    getVenuesByKeywordRoute,
    addVenueToUserFavouriteRoute,
    getCommentsByVenueRoute,
    addCommentByVenueRoute,
} = require("./route/database");

const { checkIn, createUser} = require("./route/login_database");

function mountRouter(app) {
    
    //app.get("/", (req, res) => res.send("Hello world"));
    app.get("/login", (req, res) => res.sendFile(__dirname + '/loginpage.html'));
    app.get("/mainpage", (req, res) => res.sendFile(__dirname + '/mainpage.html'));
    app.get("/adminpage", (req, res) => res.sendFile(__dirname + '/adminpage.html'));
    app.post('/login', checkIn);
    app.post('/login/creat', createUser);
    app.get("/venue/all", getAllVenuesRoute);
    app.get("/venue/all/keywords", getVenuesByKeywordRoute);
    app.post("/venue/add/favourite", addVenueToUserFavouriteRoute);
    app.get("/comment/get/venue", getCommentsByVenueRoute);
    app.post("/comment/add/venue", addCommentByVenueRoute);
    
    app.all("/*", (req, res) => res.redirect('/login'));
}


module.exports = {mountRouter}
