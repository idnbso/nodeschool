const path = require("path");
const express = require("express");
const app = express();
const portNumber = process.argv[2];

const staticPath = process.argv[3] || path.join(__dirname, "public");
app.use(require("stylus").middleware(staticPath));
app.use(express.static(staticPath));

const serverPortNumber = portNumber || 3000;
app.listen(serverPortNumber, () => {
  console.log(`Http server is running at port ${serverPortNumber}...`);
});
