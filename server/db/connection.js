const mongoose = require("mongoose");
require("dotenv").config();
const connectMongoDB = async () => {
  const connect = await mongoose.connect(process.env.CONNECTION_STRING);
  console.log("connection success", connect.connection.host);
};

module.exports = connectMongoDB;
