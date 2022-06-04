require("dotenv").config() // load .env variables
const mongoose = require("mongoose");
const {log} = require('mercedlogger');

// DESTRUCTURING ENV VARIABLES
const {DATABASE_URL} = process.env;

// CONNECT TO MONGODB
mongoose.connect = mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// CONNECTION EVENTS
mongoose.connection
    .on("open", () => log.green("DATABASE STATE", "Connection Open"))
    .on("close", () => log.magenta("DATABASE STATE", "Connection Closed"))
    .on("error", (error) => log.red("DATABASE STATE", error));

// EXPORT CONNECTION
module.exports = mongoose;