//this file made by Allen & Carson
//to check login info and redirect to the corresponding page
//Because the hash function of the password only work when using User.Creat();
//So we made the Creatnew user here to test.

// mongodb connection
const express = require("express");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const fs = require("fs");

const { userSchema } = require("../service/database/schema");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(cookieParser());

const DATABASE_CONNECT_STRING =
  "mongodb+srv://stu140:p875160W@cluster0.gbo7pn3.mongodb.net/stu140";
mongoose.connect(DATABASE_CONNECT_STRING);

const User = mongoose.model("User", userSchema);
// const venueModel = mongoose.model("Venue", venueSchema);
// const eventModel = mongoose.model("Event", eventSchema);

async function scrapData() {
  const XMLScraper = require("../dataScraping/dataScraping");
}

async function dumpData() {
  fs.readFile("../dataScraping/output/venuesData.json", function (err, data) {
    if (err) {
      console.log("dumpData readfile error", err);
    } else {
      console.log("venue", result);
    }
  });
}

async function login(req, res) {
  await scrapData();
  //   await dumpData();
  User.findOne({ username: req.body["username"] }, (err, e) => {
    if (err) res.send(err);
    else {
      if (!e) {
        res.set("Content-Type", "text/plain");
        res.status(404).send("User not existed.");
        //console.log(req.body['username']);
        //console.log(e);
      } else if (e.username == "admin") {
        bcrypt.compare(
          req.body["password"],
          e.password,
          function (error, isMatch) {
            if (error) {
            } else if (isMatch) {
              const txt = {
                isAdmin: e.isAdmin,
              };
              res.status(200).send(txt);
            } else {
              res.set("Content-Type", "text/plain");
              const txt = {
                error: "wrong password.",
              };
              res.status(401).send(txt);
            }
          }
        );
      } else {
        bcrypt.compare(
          req.body["password"],
          e.password,
          function (error, isMatch) {
            if (error) {
            } else if (isMatch) {
              //res.cookie("username", e.username);
              res.set("Content-Type", "text/plain");
              const txt = {
                isAdmin: e.isAdmin,
              };
              res.status(200).send(txt);
            } else {
              res.set("Content-Type", "text/plain");
              const txt = {
                error: "wrong password.",
              };
              res.status(401).send(txt);
            }
          }
        );
      }
    }
  });
}

async function createUser(req, res) {
  User.count((err, count) => {
    if (err) {
      res.set("Content-Type", "text/plain");
      res.send("Count error <br>" + err);
    } else {
      User.create(
        {
          userId: count + 1,
          username: req.body["username"],
          password: req.body["password"],
          isAdmin: req.body["isAdmin"],
        },
        (err, e) => {
          if (err) {
            res.set("Content-Type", "text/plain");
            const txt = {
              error: err,
            };
            res.status(404).send(txt);
          } else {
            res.status(201);
            res.set("Content-Type", "text/plain");
            // res.send(JSON.stringify(e, null, " "));
            res.send(e);
          }
        }
      );
    }
  });
}

async function getUser(req, res) {
  User.findOne({ username: req.body["username"] }, (err, e) => {
    //console.log(req.body['username']);
    if (!e) {
      res.status(404);
      res.set("Content-Type", "text/plain");
      res.send("No User Found");
    } else {
      //   res.send(JSON.stringify(e, null, " "));
      res.send(e);
    }
  });
}

async function updateUser(req, res) {
  User.findOne({ userId: req.body["userId"] }, (err, e) => {
    if (err) res.send(err);
    else {
      e.username = req.body["username"];
      e.password = req.body["password"];
      e.save();
      res.set("Content-Type", "text/plain");
      //   res.send(JSON.stringify(e, null, " "));
      res.send(e);
    }
  });
}

async function deleteUser(req, res) {
  User.findOne({ userId: req.body["userId"] }, (err, e) => {
    if (err) res.send(err);
    else {
      if (e == null) {
        res.set("Content-Type", "text/plain");
        res.status(404).send("User is not found.");
      } else {
        User.deleteOne({ userId: e.userId }, (err, result) => {
          if (err) res.send(err);
          else {
            res.set("Content-Type", "text/plain");
            res.status(204).send();
          }
        });
      }
    }
  });
}

async function getAllUser(req, res) {
  User.find({}, (err_e, e) => {
    if (err_e) res.send(err_e);
    else {
      if (e == null) {
        res.status(404);
        res.set("Content-Type", "text/plain");
        res.send("There is no user.");
      } else {
        let all = [];
        for (let i = 0; i < e.length; i++) {
          all.push({
            UserId: e[i].userId,
            username: e[i].username,
            password: e[i].password,
          });
        }
        res.set("Content-Type", "text/plain");
        // res.send(JSON.stringify(all, null, " "));
        res.send(all);
      }
    }
  });
}

/*
async function alll(req, res) {
    if (req.cookies['visited'] === undefined) {
        res.cookie('visited', 'yes', { maxAge: '1200000'});
        res.send('Your first visit!');
        } else {
        res.send('Welcome back!');
        }
}
*/

module.exports = {
  login,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUser,
};
