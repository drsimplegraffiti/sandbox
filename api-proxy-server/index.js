const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// Rate limit
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, //10 mins
  max: 5,
});

app.use(cors());
app.use(limiter);
app.set("trust proxy", 1);

app.use("/api", require("./routes"));
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
