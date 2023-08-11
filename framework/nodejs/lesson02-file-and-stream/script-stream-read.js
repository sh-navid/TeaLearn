"use strict";

const fs = require("fs");
const pth = require("path");

let data = '';

const readerStream = fs.createReadStream(pth.join(__dirname, "index.html"));
readerStream.setEncoding('UTF8');

readerStream.on('data', (chunk) => {
    data += chunk;
});

readerStream.on('end', () => {
    console.log(data);
});

readerStream.on('error', (err) => {
    console.log(err.stack);
});

console.log("End of Node Program");