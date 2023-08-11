"use strict"; //for security always use strict

//Node 14.15.1 LTS

const exp = require("express");
const app = exp();
const pth = require("path");

//npm i --save socket.io
const io = require('socket.io')(app.listen(3000));

app.use("/index", exp.static(pth.join(__dirname, "", "index.html")));

app.get("/api", (q, r) => {
    r.send("API");
});

io.on('connection', (socket) => {
    console.log("connected");
    socket.on('msg', (msg) => {
        console.log(msg);
        io.emit('msg', msg);
    });
});