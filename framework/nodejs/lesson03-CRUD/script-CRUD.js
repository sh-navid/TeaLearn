"use strict"; //for security always use strict
//Node 14.15.1 LTS

/*

+--------+-------------+------------+
| CRUD   | In Database | In RestAPI |
+--------+-------------+------------+
| CREATE | INSERT      | POST       |
+--------+-------------+------------+
| READ   | SELECT      | GET        |
+--------+-------------+------------+
| UPDATE | UPDATE      | PUT        |
+--------+-------------+------------+
| DELETE | DELETE      | DELETE     |
+--------+-------------+------------+

*/

const exp = require("express");
const app = exp();
const pth = require("path");

//npm i --save body-parser
const bp = require("body-parser");
//import bodyParser from 'body-parser'

app.use("/client", exp.static(pth.join(__dirname, "", "index.js")));
app.use("/index", exp.static(pth.join(__dirname, "", "index.html")));

//Middlewares basically intercepts incoming http request and as such you can use them to 
//perform several operations ranging from authentication to validations etc.
app.use(bp.urlencoded({ extended: false })); // this is a middleware
app.use(bp.json()); // this is used for parsing the JSON object from POST

//get index of resource or indivisual resource
app.get("/data", (q, r) => {
    r.send({ res: "*GET All*" });
});

app.get("/data/:id", (q, r) => {
    r.send({ res: "*GET " + q.params.id + "*" });
});

//create resource or provide data
app.post("/data", (q, r) => {
    let body_data = JSON.stringify(q.body);
    r.send({ res: "*POST: " + body_data + "*" });
});

//create or replace resource
app.put("/data/:id", (q, r) => {
    r.send({ res: "*PUT*" });
});

//update/modify a resource
app.patch("/data/:id", (q, r) => {
    r.send({ res: "*PATCH*" });
});

//remove a resource
app.delete("/data/:id", (q, r) => {
    r.send({ res: "*DELETE*" });
});

app.listen(3000);