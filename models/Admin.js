const Mongoose = require("mongoose")

const adminSchema = new Mongoose.Schema({
    username: String,
    password: String,
    token: String,
});

module.exports = Mongoose.model("admin", adminSchema);