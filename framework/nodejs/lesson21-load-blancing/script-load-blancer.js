"use strict";

//to kill all other nodejs instances:
//taskkill /im node.exe /F

const exp = require("express");
const app = exp();
const pth = require("path");
const ch = require('child_process');
const http = require('http');

const PORT = 4000;
const MAX_SERVER_INSTANCES = 5;

app.listen(PORT);
console.log("load blancer on port " + PORT);

for (var i = 0; i < MAX_SERVER_INSTANCES; i++) {
    var workerProcess = ch.fork(pth.join(__dirname, "script-dist-server.js"), [i + 1]);

    workerProcess.on('exit', () => console.log('Exit'));
}

let next_server = 1;

app.get("/data", (q, r) => {
    next_server++;
    if (next_server > MAX_SERVER_INSTANCES)
        next_server = 1;

    http.request({
        host: "localhost", port: 4000 + next_server, path: '/data', method: 'GET'
    }, (res) => {
        res.setEncoding('utf8');
        let data = "";
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            r.send(data);
        });
    }).end();
});