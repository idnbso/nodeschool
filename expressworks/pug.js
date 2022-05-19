const path = require("path");
const express = require("express");
const app = express();
const portNumber = process.argv[2];
const pugPath = process.argv[3];

app.set("views", pugPath || path.join(__dirname, "templates"));
app.set("view engine", "pug");

app.get("/home", function (req, res) {
  res.render("index", { date: new Date().toDateString() });
});

const serverPortNumber = portNumber || 3000;
app.listen(serverPortNumber, () => {
  console.log(`Http server is running at port ${serverPortNumber}...`);
});
