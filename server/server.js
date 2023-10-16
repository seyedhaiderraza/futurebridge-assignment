const express = require("express");

const app = express();

app.get("/", (req, resp) => {
  resp.send("server homepage");
});

app.listen(3006, (err) => {
  console.log("server started");
});
