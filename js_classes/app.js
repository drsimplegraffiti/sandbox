const debug = require("debug");
const express = require("express");
const app = express();
const name = "hi";
debug("booting %o", name);

app.listen(3000, () => {
  // if (!process.env.DEBUG) {
  //   console.log = function () {};
  // }
  console.log("app running");
});
