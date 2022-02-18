const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;

//initiate app
const app = express();

// config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(morgan('dev'));
const port = process.env.PORT || 4000;

//connect to db
mongoose.connect(
  process.env.MONGO_URI ||
    "mongodb+srv://drsimplegraffiti:admin1234@godan.minj6.mongodb.net/godan-info?retryWrites=true&w=majority",
  () => {
    console.log("connected to db");
  }
);

// data schema
const itemSchema = {
  title: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
};
//data model
const Item = mongoose.model("Item", itemSchema);

// Read route
app.get("/items", async (req, res) => {
  try {
    const PAGE_SIZE = 3;
    const page = req.query.page || "0";
    const total = await Item.countDocuments({});
    const items = await Item.find()
      .limit(PAGE_SIZE)
      .skip(PAGE_SIZE * page)
      .sort({ createdAt: -1 });
    return res
      .status(200)
      .json({ items, totalPages: Math.ceil(total / PAGE_SIZE) });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Server Error");
  }
});

//create route
app.post("/new-item", async (req, res) => {
  try {
    const newItem = new Item({
      title: req.body.title,
      description: req.body.description,
    });
    const savedItem = await newItem.save();
    return res.status(201).json(savedItem);
  } catch (error) {
    console.log(error);
    return res.status(500).json("server error");
  }
});

//delete route
app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Item.findByIdAndDelete({ _id: id });
    return res.status(204).json();
  } catch (error) {
    console.log(error);
    return res.status(500).json("server error");
  }
});

//update route
app.put("/put/:id", (req, res) => {
  const updatedItem = {
    title: req.body.title,
    description: req.body.description,
  };

  Item.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: updatedItem },
    (req, res, err) => {
      if (!err) {
        console.log("Item updated");
      } else {
        console.log(err);
      }
    }
  );
});

//delete all
app.delete("/clear/all", async (req, res) => {
  try {
    const deleteAll = await Item.deleteMany();
    res.status(200).json("all db cleared");
  } catch (error) {
    console.log(error);
  }
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

// HEROKU LOGIN
if (process.env.NODE_ENV === "production") {
  // app.use(express.static('./client/build'))
  app.use(express.static(path.join(__dirname, "./client/build")));
}

//listen to server
app.listen(port, () => {
  console.log(`SERVER RUNNING ON ${port}`);
});
