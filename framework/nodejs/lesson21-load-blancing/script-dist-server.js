"use strict";

//to kill all other nodejs instances in windows use this:
//taskkill /im node.exe /F

const exp = require("express");
const app = exp();
const pth = require("path");

let port = 4000 + parseInt(process.argv[2]);

app.get("/data", (q, r) => {
    r.send({ res: "*GET All*"+port });
});

app.listen(port);
console.log(port);