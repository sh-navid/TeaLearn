"use strict"; //for security always use strict
//Node 14.15.1 LTS

//npm install -g nodemon
const exp = require("express");
const app = exp();

app.get("/api/v01/calc/:x", (q, r) => {
    r.send("result(v01): " + q.params.x);
});

app.get("/api/v02/calc/:x/:y", (q, r) => {
    r.send("result(v02): " + (q.params.x * q.params.y));
});

app.listen(3000);