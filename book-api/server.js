const express = require("express");
const { create, readAll, readOne, update, deleteOne } = require("./dbHelpers");
const router = express.Router();
const db = require("./db");

router.post("/create", async (req, res) => {
  if (!Object.keys(req.body).length) {
    res.status(400).json({
      message: "Request body cannot be empty",
    });
  }

  const { title, author, publisher, read } = req.body;

  const book = await create({ title, author, publisher, read });

  if (book.error) {
    res.status(500).json({
      message: book.error,
    });
  }

  res.status(201).json({
    message: "New book record created",
  });
});

router.get("/read-all", async (req, res) => {
  const books = await readAll();

  if (books.error) {
    res.status(500).json({
      message: error.message,

      books: books.data,
    });
  }

  res.status(200).json({
    message: "success",

    books: books.data,
  });
});

router.get("/read-one/:bookID", async (req, res) => {
  const book = await readOne(req.params.bookID);

  if (book.error) {
    res.status(500).json({
      message: book.error,

      books: book.data,
    });
  }

  res.status(200).json({
    message: "success",

    book: book.data,
  });
});

router.put("/update/:bookID", async (req, res) => {
  if (!Object.keys(req.body).length) {
    res.status(400).json({
      message: "Request body cannot be empty",

      book: null,
    });
  }

  const book = await update(req.params.bookID, req.body);

  if (book.error) {
    res.status(500).json({
      message: book.error,

      book: book.data,
    });
  }

  res.status(200).json({
    message: "success",

    book: book.data,
  });
});

router.delete("/delete/:bookID", async (req, res) => {
  const isDeleted = await deleteOne(req.params.bookID);

  if (isDeleted.error) {
    res.status(500).json({
      message: isDeleted.error,
    });
  }

  res.status(200).json({
    message: "Deleted Successfully",
  });
});

router.delete("/delete-all", async (req, res) => {
  const isDeleted = await deleteAll(req);

  if (isDeleted.error) {
    res.status(500).json({
      message: isDeleted.error,
    });
  }

  res.status(200).json({
    message: "Deleted Successfully",
  });
});

module.exports = router;
