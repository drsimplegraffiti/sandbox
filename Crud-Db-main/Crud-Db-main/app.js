// import express module
const express = require('express');
//import bodyParser Module
const bodyParser = require("body-parser");
//create an instance of express application
const app = express();
//tell express application to use the body parser module
//and pass in json data
app.use(bodyParser.json());
//require path module
const path = require('path');



//bring in database
const db = require('./db');
//a database- todo , with a collection
const collection = "todo";

//Creating our route first entry point
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

//creating our second entry point
app.get('/getTodos', (req, res) => {
    // get all Todo documents within our todo collection
    // send back to user as json
    db.getDB().collection(collection).find({}).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {
            res.json(documents);
        }
    });
});


// update
app.put('/:id', (req, res) => {
    // Primary Key of Todo Document we wish to update
    const todoID = req.params.id;
    // Document used to update
    const userInput = req.body;
    // Find Document By ID and Update
    db.getDB().collection(collection).findOneAndUpdate({ _id: db.getPrimaryKey(todoID) }, { $set: { todo: userInput.todo } }, { returnOriginal: false }, (err, result) => {
        if (err)
            console.log(err);
        else {
            res.json(result);
        }
    });
});

//create
app.post('/', (req, res) => {
    // Document to be inserted
    const userInput = req.body;

    db.getDB().collection(collection).insertOne(userInput, (err, result) => {
        if (err) {
            const error = new Error("Failed to insert Todo Document");
            error.status = 400;
            next(error);
        } else
            res.json({ result: result, document: result.ops[0], msg: "Successfully inserted Todo!!!", error: null });
    });
});


//delete
app.delete('/:id', (req, res) => {
    // Primary Key of Todo Document
    const todoID = req.params.id;
    // Find Document By ID and delete document from record
    db.getDB().collection(collection).findOneAndDelete({ _id: db.getPrimaryKey(todoID) }, (err, result) => {
        if (err)
            console.log(err);
        else
            res.json(result);
    });
});


//connect to our database

db.connect((err) => {
    // If err unable to connect to database
    // End application
    if (err) {
        console.log('unable to connect to database');
        process.exit(1);
    }
    // Successfully connected to database
    // Start up our Express Application
    // And listen for Request
    else {
        app.listen(3000, () => {
            console.log('connected to database, app listening on port 3000');
        });
    }
});