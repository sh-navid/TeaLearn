"use strict";

const exp = require("express");
const app = exp();
const frisby = require('frisby');

app.get("/data", (q, r) => {
    r.send({ res: "*GET All*" });
});

app.listen(3000);

return frisby .get('localhost:3000/data')
        .expect('status', 200);