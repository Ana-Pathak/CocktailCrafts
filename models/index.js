// this index file configures the models and exports them to the databse directly, uses the mongoose format

const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./user.model.js")(mongoose);
db.favorite = require("./favorite.model.js")(mongoose);
module.exports = db;