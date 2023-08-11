"use strict"; //for security always use strict
//Node 14.15.1 LTS

const exp = require("express");
const app = exp();
const fs = require("fs");

app.get("/html", (q, r) => {
    r.send(`<h1>HTML</h1>`);
});

app.get("/file/sync", (q, r) => {
    let data = fs.readFileSync("nodejs/lesson02/index.html");

    data += "";
    data = data.split("{{data}}").join("SYNC");

    r.writeHead(200, { "Content-Type": "text/html" });
    r.write(data);
    r.end();
});

app.get("/file/async", (q, r) => {
    fs.readFile("nodejs/lesson02/index.html", (err, data) => {
        data += "";
        data = data.split("{{data}}").join("A-SYNC");

        r.writeHead(200, { "Content-Type": "text/html" });
        r.write(data);
        r.end();
    });
});

let html = "";
app.get("/file/:title", (q, r) => {
    if (html === "") {
        html = fs.readFileSync("nodejs/lesson02/index.html");
        console.log("File Loaded");
    }

    data = (html+"").split("{{data}}").join(q.params.title);

    r.writeHead(200, { "Content-Type": "text/html" });
    r.write(data);
    r.end();
});

app.listen(3000);