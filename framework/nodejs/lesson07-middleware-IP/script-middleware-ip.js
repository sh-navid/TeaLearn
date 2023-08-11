"use strict"; //for security always use strict

//Node 14.15.1 LTS

const exp = require("express");
const app = exp();

const dt = require('nedb');
const db = new dt({ filename: 'nodejs/data/db-ip', autoload: true });

//For IP, First, you need to add the following line, if your server is behind a proxy
//app.set('trust proxy', true);

db.loadDatabase(err => { console.log("Database is loaded") });

app.use((q, r, next) => {
    console.log("Middleware, IP: ", q.ip);
    db.insert({ ip: q.ip, date: new Date() }, (err, doc) => { });
    next();
});

app.get("/list", (q, r) => {
    db.find({}, (err, dta) => {
        r.send(JSON.stringify(dta));
    });
});

app.listen(3000);