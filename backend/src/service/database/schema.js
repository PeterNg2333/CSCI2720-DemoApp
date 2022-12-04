const {Schema} = require("mongoose");

const userSchema = new Schema({
    id: Number,
    name: String,
    role: String,
    salt: String,
    password: String,
    isAdmin: Boolean,
    token: String,
    favourite: [],
});

const commentSchema = new Schema({
    id: Number,
    userId: Number,
    venueId: Number,
    text: String,
});

const venueSchema = new Schema({
    id: Number,
    name: String,
    latitude: Number,
    longitude: Number,
});

const eventSchema = new Schema({
    id: Number,
    title: String,
    venueId: Number,
    datetime: [],
    description: String,
    presenter: String,
    price: String,
    programTime: String,
    ageLimit: String,
    remark: String,
});

module.exports = {userSchema, commentSchema, venueSchema, eventSchema,};
