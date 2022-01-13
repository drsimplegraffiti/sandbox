var express = require('express');

//require the socket.io
var socket = require('socket.io');

//App setup
var app = express();



//server
var server = app.listen(4000, function() {
    console.log('listen to request on port 4000');
});

// //use middle ware to serve public or static file
//this servers automatically
app.use(express.static('public'));

//socket setup on the server
var io = socket(server);


io.on('connection', function(socket) {
    console.log('made socket connection', socket.id);

    //listen for message sent from the client
    socket.on('chat', function(data) {
        io.sockets.emit('chat', data);
    });

    socket.on('typing', function(data) {
        socket.broadcast.emit('typing', data)
    })
});