require('dotenv').config();
const colors = require('colors');
const consoleLog = require('../utils/console-log');
const mongoose = require("mongoose");

exports.dbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });

    mongoose.set('strictQuery', false);

    consoleLog.send(colors.green('[MongoDB] ') + "connected to database");
  } catch (err) {
    console.log(err);
    throw new Error("Cannot Connect to database...");
  }
};

