const express = require("express");
const https = require("https");
const path = require("path");
const fs = require("fs");
const { fileURLToPath } = require("url");

const app = express();
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Express routes here
app.get("/", (req, res) => {
  res.send("working");
});

// Listen with SSL
const server = https.createServer(
  {
    key: fs.readFileSync(`${__dirname}/localhost-key.pem`, "utf8"),
    cert: fs.readFileSync(`${__dirname}/localhost.pem`, "utf8"),
  },
  app
);

server.listen(443, (_) => {
  console.log("App listening at https://localhost");
});
