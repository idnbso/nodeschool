const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const portNumber = process.argv[2];

app.use(bodyparser.urlencoded({ extended: false }));

app.post("/form", function (req, res) {
  const reversedFormInputStr = req.body.str.split("").reverse().join("");
  res.writeHead(200);
  res.end(reversedFormInputStr);
});

const serverPortNumber = portNumber || 3000;
app.listen(serverPortNumber, () => {
  console.log(`Http server is running at port ${serverPortNumber}...`);
});
