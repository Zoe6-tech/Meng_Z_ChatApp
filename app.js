const express = require('express');
const path = require('path');

const messager = require('socket.io')();

const app = express();

app.use(express.static("public"));

const port = process.env.PORT || 5050;//in case of two app complete to each other

app.get("/", (req,res) => {
    console.log('you have now hit the home route');
    res.sendFile(path.join(__dirname, "index.html"));//localhost:3000/index.html
});

app.get("/chat", (req,res) => {
    console.log('you have now hit the chat.html');
    res.sendFile(path.join(__dirname, "chat.html"));//localhost:3000/index.html
});

const server = app.listen(port, ()=>{
    console.log(`app is running on ${port}`);
});

//messager is the coonection manager - like a switcboard operator
messager.attach(server);//io server

messager.on('connection', (socket) => {//make a connection to operator
    console.log(`a user connected: ${socket.id}`);

    socket.on('disconnect', ( ) => {
        console.log('a user has disconnection');
    })
});