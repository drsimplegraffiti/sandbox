const express = require("express");
const app = express();

app.get("/uppercase/:theValue", (req, res) => {
  res.send(req.params.theValue.toUpperCase());
});
app.listen(3000, (req, res) => {
  console.log(`App running on ....`);
});
