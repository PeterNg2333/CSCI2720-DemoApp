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

const {
  login,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUser,
} = require("./route/login_database");

function mountRouter(app) {
  app.get("/", (req, res) => res.send("Hello world"));
  // <<<<<<< HEAD
  app.get("/login", (req, res) => res.sendFile(__dirname + "/loginpage.html"));
  app.get("/mainpage", (req, res) =>
    res.sendFile(__dirname + "/mainpage.html")
  );
  app.get("/adminpage", (req, res) =>
    res.sendFile(__dirname + "/adminpage.html")
  );
  app.post("/login", checkIn);
  app.post("/login/creat", createUser);

  //   CRUD user
  app.post("/admin/createuser", createUser);
  app.post("/admin/getuser", getUser);
  app.put("/admin/updateuser", updateUser);
  app.delete("/admin/deleteuser", deleteUser);
  app.get("/admin/getalluser", getAllUser);

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
  // =======
  //html file for debug
  //   app.get("/login", (req, res) => res.sendFile(__dirname + "/loginpage.html"));
  //   app.get("/main", (req, res) => res.sendFile(__dirname + "/mainpage.html"));
  //   app.get("/admin", (req, res) => res.sendFile(__dirname + "/adminpage.html"));
  //   //
  //   //login
  //   app.post("/login", login);
  //   //CRUD user
  //   app.post("/admin/createuser", createUser);
  //   app.post("/admin/getuser", getUser);
  //   app.put("/admin/updateuser", updateUser);
  //   app.delete("/admin/deleteuser", deleteUser);
  //   app.get("/admin/getalluser", getAllUser);
  //   //logout
  //   app.post("/logout", (req, res) => {
  //     res.redirect("/login");
  //   });
  //   app.get("/venue/all", getAllVenuesRoute);
  //   app.get("/venue/all/keywords", getVenuesByKeywordRoute);
  //   app.post("/venue/add/favourite", addVenueToUserFavouriteRoute);
  //   app.get("/comment/get/venue", getCommentsByVenueRoute);
  //   app.post("/comment/add/venue", addCommentByVenueRoute);

  //   app.all("/*", (req, res) => {
  //     res.redirect("/login");
  //   });

  // >>>>>>> login-Carson-Allen-2
}

module.exports = { mountRouter };
