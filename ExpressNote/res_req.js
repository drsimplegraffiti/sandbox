const express = require("express");
const app = express();

app.get("/api/v1", (req, res) => {
  // @desc request methods
  console.log(req.ip);
  console.log(req.url);
  console.log(req.method);
  console.log(req.path);
  console.log(req.secure);
  console.log(req.xhr);
  console.log(req.params);
  console.log(req.query); // ?name=joe&age=34
  console.log(req.query.name); // ?name=joe&age=34
  console.log(req.protocol);
  console.log(req.hostname);
  console.log(req.cookies);
  console.log(req.baseUrl);

  // @response methods
  res.cookie("username", "joseph", {
    // set cookie
    expires: new Date(Date.now + 9000),
    httpOnly: true,
    secure: true,
    path: "/admin",
  });
  res.clearCookie("username"); // clear cookie
  console.log(req.headers);
  res.header("User-Agent");
  res.set("Content-Type", "text/html");
  res.end(); // sends response without a body
});

app.get("/clear-cookie", (req, res) => {});

app.listen(3434, (req, res) => {
  console.log(`App running on ....`);
});
