const express = require("express");
const app = express();
const connectDB = require("./db/db");

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/user.routes"));

app.all("*", (req, res) => {
  res.status(404).json({ msg: "Not found" });
});
app.listen(4000, () => {
  console.log("running");
});
