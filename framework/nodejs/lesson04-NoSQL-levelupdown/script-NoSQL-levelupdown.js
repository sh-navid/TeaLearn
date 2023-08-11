"use strict"; //for security always use strict

//Node 14.15.1 LTS

const exp = require("express");
const app = exp();

//npm i --save levelup leveldown
//or
//yarn add levelup leveldown
const lu = require("levelup");
const ld = require("leveldown");
const db = lu(ld("nodejs/data/level/db"));

db.put("ir", "IRAN");
db.put("fr", "FRANCE");
db.put("gr", "GERMANY");


//ERR_HTTP_HEADERS_SENT:
//That particular error occurs whenever you try to send more than one response to 
//the same request and is usually caused by improper asynchronous code.


app.get("/list", (q, r) => {
    let dd = [];
    let sent = false;

    let fn = () => {
        if (sent) return;
        sent = true;
        r.send(dd.join(" - "));
    };

    db.createValueStream({ keys: false, values: true })
        .on('data', (data) => {
            console.log(data + "");
            dd.push(data + "");
        })
        .on('error', fn)
        .on('close', fn)
        .on('end', fn);
});

app.get("/select/:key", (q, r) => {
    db.get(q.params.key, (err, val) => {
        if (err)
            r.send("NOT EXISTS");
        else
            r.send(val + "");
    });
});

app.get("/upsert/:key/:val", (q, r) => {
    db.put(q.params.key, q.params.val, () => {
        r.send("DONE");
    });
});

app.get("/delete/:key", (q, r) => {
    db.del(q.params.key, (err) => {
        if (err)
            r.send("CANT DELETE");
        else
            r.send(q.params.key + " DELETED");
    });
});

app.listen(3001);