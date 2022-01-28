const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));

const port = process.env.PORT || 2322;

app.get("/", (req, res) => {
  res.send('<h2>Home page..Docker file</h2>');
});
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
