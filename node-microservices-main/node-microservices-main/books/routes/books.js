const express = require('express');
const router = express.Router();
const Book  = require('../models/Book')

router.post('/create-book', async(req,res)=>{
    try {
        const {title, author, numberPages, publisher} = req.body;

       const newBook = new Book({
            title,
            author,
            numberPages,
            publisher
        });
        const createdBook = await newBook.save();
        return res.status(201).json({
            message: 'Book created successfully',
            data:createdBook
        })
    } catch (error) {
        console.error(error.message)
        return res.status(500).json('Something went wrong')
    }
})


//GET ALL BOOKS
router.get('/books', async(req,res)=>{
    try {
        const getBooks = await Book.find({})
        return res.status(200).json(getBooks)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json('Something went wrong')
    }
})

//GET BOOK BY ID
router.get('/book/:id', async(req,res)=>{
    try {
        const id = req.params.id;
        const getSingleBook = await Book.findById(id)
        return res.status(200).json(getSingleBook)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json('Something went wrong')
    }
})


//DELETE BOOK BY ID
router.delete('/book/:id', async(req,res)=>{
    try {
        const id = req.params.id;
        const deleteBook = await Book.findOneAndRemove(id)
        return res.status(204).json(deleteBook)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json('Something went wrong')
    }
})
module.exports = router;