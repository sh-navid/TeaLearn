"use strict";

const multi = require('multistream');
const fs = require('fs');
const pth = require("path");
const exp = require("express");
const app = exp();
app.listen(3000);

app.get("/stream", (q, r) => {
  new multi([
    fs.createReadStream(pth.join(__dirname, "index.html")),
    fs.createReadStream(pth.join(__dirname, "index.html")),
    fs.createReadStream(pth.join(__dirname, "index.html"))
  ]).pipe(r);
});