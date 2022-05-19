const fs = require("fs");
const util = require("util");
const express = require("express");
const app = express();
const portNumber = process.argv[2];

app.get("/books", async (req, res) => {
  try {
    const fileFullPath = process.argv[3];
    const readFile = util.promisify(fs.readFile);
    const fileAsString = await readFile(fileFullPath, "utf8");
    const fileAsJson = JSON.parse(fileAsString);
    res.json(fileAsJson);
  } catch (err) {
    res.sendStatus(500);
  }
});

const serverPortNumber = portNumber || 3000;
app.listen(serverPortNumber, () => {
  console.log(`Http server is running at port ${serverPortNumber}...`);
});
