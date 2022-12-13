const { response } = require("express");
const {
    getAllVenuesRoute,
    getVenuesByKeywordRoute,
    addVenueToUserFavouriteRoute,
    getCommentsByVenueRoute,
    addCommentByVenueRoute,
} = require("./route/database");

const { login, createUser, getUser, updateUser, deleteUser, getAllUser} = require("./route/login_database");

function mountRouter(app) {
    
    //app.get("/", (req, res) => res.send("Hello world"));
    //html file for debug
    app.get("/login", (req, res) => res.sendFile(__dirname + '/loginpage.html'));
    app.get("/main", (req, res) => res.sendFile(__dirname + '/mainpage.html'));
    app.get("/admin", (req, res) => res.sendFile(__dirname + '/adminpage.html'));
    //


    //login
    app.post('/login', login);

    //CRUD user
    app.post('/admin/createuser', createUser);
    app.post('/admin/getuser', getUser);
    app.put('/admin/updateuser', updateUser);
    app.delete('/admin/deleteuser', deleteUser);

    app.get('/admin/getalluser', getAllUser);

    //logout
    app.post('/logout', (req, res) => {

      res.redirect('/login');

    });


    app.get("/venue/all", getAllVenuesRoute);
    app.get("/venue/all/keywords", getVenuesByKeywordRoute);
    app.post("/venue/add/favourite", addVenueToUserFavouriteRoute);
    app.get("/comment/get/venue", getCommentsByVenueRoute);
    app.post("/comment/add/venue", addCommentByVenueRoute);
    
    app.all("/*", (req, res) => {
        
        res.redirect('/login');
    });
}


module.exports = {mountRouter}