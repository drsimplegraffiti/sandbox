const ronin = require("ronin-server");
const mocks = require("ronin-mocks");

const server = ronin.server();

server.use("/", mocks.server(server.Router(), false, true));

// @desc    Home page
// @route   GET  /
// @access  Public
server.get("/", (req, res) => {
  res.send("home page");
});

// @desc    Create post
// @route   POST  /
// @access  Public
server.post("/post", (req, res) => {
  const { data } = req.body;
  res.send(data);
});

server.start(() => {
  console.log("app running on mock server");
});
