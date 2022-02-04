const express = require("express");
const xml = require("xml");
const xmlparser = require('express-xml-bodyparser');
const app = express();

const port = 2345;

app.use(express.json());
app.use(xmlparser());

let data = {
  person: [
    {
      name: "abayomi joseph",
    },
  ],
};

app.get("/", (req, res) => {
  const query = req.query;
  if (query.type === "xml") {
    res.set("Content-type", "text/xml");
    return res.send(xml(data, true));
  } else {
    return res.send(data);
  }
});

app.post("/", (req, res) => {
  let body = req.body;
  let query = req.query;
  data.person.push(body);
  if (query.type === "xml") {
    res.set("Content-type", "text/xml");
    return res.send(xml(data, true));
  } else {
    return res.send(data);
  }
});

app.listen(port, () => {
  console.log(`Port running on ${port}`);
});
