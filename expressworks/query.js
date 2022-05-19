const express = require("express");
const app = express();
const portNumber = process.argv[2];

app.get("/search", function (req, res) {
  res.send(req.query);
});
const serverPortNumber = portNumber || 3000;
app.listen(serverPortNumber, () => {
  console.log(`Http server is running at port ${serverPortNumber}...`);
});
