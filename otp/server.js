require("dotenv/config");
const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect(process.env.MONGO_URL_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongoDb");
  })
  .catch((err) => {
    console.log("MongoDb Connection Failed", err);
  });

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`App listening to port ${port}`);
});
