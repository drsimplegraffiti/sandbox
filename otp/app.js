const express = require("express");
const app = express();
const morgan = require("morgan");
const userRouter = require("./router/user_router");

app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/user", userRouter);
module.exports = app;
