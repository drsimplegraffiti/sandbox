const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

mongoose.connect(
  "mongodb+srv://drsimplegraffiti:admin1234@godan.minj6.mongodb.net/godan-info?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

// schema
const postSchema = mongoose.Schema({
  text: String,
  title: String,
});

// model
const Post = mongoose.model("Post", postSchema);

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/posts", async (req, res) => {
  try {
    const PAGE_SIZE = 3;
    const page = parseInt(req.query.page || "0");
    const total = await Post.countDocuments({});
    const posts = await Post.find({})
      .limit(PAGE_SIZE)
      .skip(PAGE_SIZE * page);
    res.json({ totalPages: Math.ceil(total / PAGE_SIZE), posts });
  } catch (error) {
    console.log(error);
    return res.status(500).json("something went wrong");
  }
});

app.post("/post", async (req, res) => {
  try {
    const { title, text } = req.body;
    const post = await Post.create({ title, text });
    const createdPost = await post.save();
    res.json(createdPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json("something went wrong");
  }
});

//Call Back connected to mongodb
const db = mongoose.connection;
db.once("open", () => {
  //Listen to server
  app.listen(3434, () => {
    console.log(`app running on 3434`);
  });
});
