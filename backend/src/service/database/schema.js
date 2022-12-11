const {Schema} = require("mongoose");

const userSchema = new Schema({
    userId: { type: Number, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {type: Boolean, required: true}
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
