const express = require("express");
const app = express();
const portNumber = process.argv[2];

app.param("id", function (req, res, next, id) {
  req.id = id;
  next();
});

app.put("/message/:id", function (req, res, next) {
  const id = req.params.id;
  const hash = require("crypto")
    .createHash("sha1")
    .update(new Date().toDateString() + id)
    .digest("hex");

  res.writeHead(200);
  res.end(hash);
});
const serverPortNumber = portNumber || 3000;
app.listen(serverPortNumber, () => {
  console.log(`Http server is running at port ${serverPortNumber}...`);
});
