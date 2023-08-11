"use strict";

const fs = require("fs");
const pth = require("path");
const data = '<html>OUT</html>';

const writerStream = fs.createWriteStream(pth.join(__dirname, "index_out.html"));
writerStream.write(data, 'UTF8');
writerStream.end();

writerStream.on('finish', () => {
    console.log("Finished");
});

writerStream.on('error', (err) => {
    console.log(err.stack);
});

console.log("End of Node Program");