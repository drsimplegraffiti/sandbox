const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 1283;

// import db schemas

//initiate app
const app = express();

//connect to db


// import route


//listen to server
app.listen(port, () => {
    console.log('SERVER RUNNING ON' + port);
})