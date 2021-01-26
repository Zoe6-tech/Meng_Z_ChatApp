const express = require('express');
const path = require('path');

const messager = require('socket.io')();

const app = express();

app.use(express.static("public"));

const port = process.env.PORT || 5050;

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

messager.attach(server);