const fs = require("fs");
const pth = require("path");

let readerStream = fs.createReadStream(pth.join(__dirname, "index.html"));
let writerStream = fs.createWriteStream(pth.join(__dirname, "index_piped.html"));
readerStream.pipe(writerStream);

console.log("NodeJS Ended");