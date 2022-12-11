//this file made by Allen & Carson
//to check login info and redirect to the corresponding page
//Because the hash function of the password only work when using User.Creat();
//So we made the Creatnew user here to test.

// mongodb connection
const mongoose = require("mongoose");
const {userSchema} = require("../service/database/schema");
const bcrypt = require('bcryptjs');

const DATABASE_CONNECT_STRING = "mongodb://localhost:27017/csci2720project";
mongoose.connect(DATABASE_CONNECT_STRING);

const User = mongoose.model("User", userSchema);

async function checkIn(req, res) {
    User.findOne({username: req.body['username']}, (err, e) => {
        if (err)
          res.send(err);       
        else {
            if (!e){
                res.set('Content-Type', 'text/plain');
                res.status(404).send("User not existed.");
                //console.log(req.body['username']);
                //console.log(e);
            } else if (e.username == 'admin'){
                bcrypt.compare(req.body['password'], e.password, function(error, isMatch) {
                    if (error) {
                    } else if(isMatch) {
                      res.redirect('/adminpage');
                    } else{
                        res.set('Content-Type', 'text/plain');
                        res.status(404).send("Wrong password.");
                    }
                });
            }else{
                bcrypt.compare(req.body['password'], e.password, function(error, isMatch) {
                    if (error) {
                    } else if (isMatch) {
                        res.redirect('/mainpage');
                    }else{
                        res.set('Content-Type', 'text/plain');
                        res.status(404).send("Wrong password.");
                    }
                });
            }       
        }
    });
}

async function createUser(req, res) {
    User.count((err, count) => {
        if(err){
            res.set('Content-Type', 'text/plain');
            res.send("Count error <br>" + err); 
        } 
        else{
            User.create({
                userId: count + 1,
                username: req.body['username'],
                password: req.body['password'],
                isAdmin: req.body['isAdmin']    
            }, (err,e) => {
                if (err){
                    res.set('Content-Type', 'text/plain');
                    res.send("Creating error <br>" + err);
                }
                    
                else{
                    res.status(201);
                    res.set('Content-Type', 'text/plain');
                    res.send(e);
                }        
            });
        }
    });
}



module.exports = {
    checkIn,
    createUser
}
