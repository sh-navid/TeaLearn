"use strict"; //for security always use strict
//Node 14.15.1 LTS

//npm cache clean --force
//npm install express --save

//also you can testing via "Postman"

const exp = require("express");
const app = exp();

app.get("/", (q, r) => {
    r.send("API Root");
});

app.get("/ver", (q, r) => {
    r.send("Version: 01");
});

//API Versioning

app.get("/api/v01/list", (q, r) => {
    r.send("API V01, List Function");
});

app.get("/api/v02/list", (q, r) => {
    r.send("API V02, List Function");
});

app.listen(3000);