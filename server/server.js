const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

app.get("/", (req, resp) => {
  resp.send("server homepage");
});

app.listen(process.env.PORT, (err) => {
  console.log("server started at", process.env.PORT);
});
