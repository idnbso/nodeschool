const path = require("path");
const express = require("express");
const app = express();
const portNumber = process.argv[2];

const staticPath = process.argv[3];
app.use(express.static(staticPath || path.join(__dirname, "public")));

const serverPortNumber = portNumber || 3000;
app.listen(serverPortNumber, () => {
  console.log(`Http server is running at port ${serverPortNumber}...`);
});
