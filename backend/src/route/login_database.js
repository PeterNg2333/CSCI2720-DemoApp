// mongodb connection
const mongoose = require("mongoose");
const {userSchema, commentSchema, venueSchema, eventSchema} = require("../service/database/schema");

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
            } else if (e.username == 'admin' && e.password == req.body['password']){
                res.redirect('/adminpage');
                
            } else if (e.password != req.body['password']){
                res.set('Content-Type', 'text/plain');
                res.status(404).send("Wrong password.");
            } else{
                res.redirect('/mainpage');

            }       
        }
    });
}



module.exports = {
    checkIn
}
