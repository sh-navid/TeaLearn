"use strict"; //for security always use strict

//Node 14.15.1 LTS

const exp = require("express");
const app = exp();


//npm install nedb --save
const dt = require('nedb');
const db = new dt({ filename: 'nodejs/data/nedb', autoload: true });


db.loadDatabase((err) => {
    if (err)
        console.log(err + "");
    else
        console.log("Database is loaded");
});


app.get("/list", (q, r) => {
    db.find({}, (err, dta) => {
        r.send(JSON.stringify(dta));
    });
});

app.get("/remove/:id", (q, r) => {
    db.remove({ id: parseInt(q.params.id) }, {}, (err, numRemoved) => {
        if (err)
            //BAD Practice - do not send error over API
            r.send(err);
        r.send("Removed: " + numRemoved);
    });
});

app.get("/select/:id", (q, r) => {
    db.findOne({ id: parseInt(q.params.id) }, (err, dta) => {
        r.send(JSON.stringify(dta));
    });
});


app.get("/update/:id/:newName", (q, r) => {
    db.findOne({ id: parseInt(q.params.id) }, (err, dta) => {

        console.log(dta);

        try {
            dta.name = q.params.newName;
            db.update({ id: parseInt(q.params.id) }, dta, (err2, numUpdated) => {
                r.send("Updated: " + JSON.stringify(numUpdated));
            });
        } catch (e) {
            //BAD Practice - do not send error over API
            r.send(e + "");
        }
    });
});


app.get("/insert/:id/:name/", (q, r) => {
    let user = {
        id: parseInt(q.params.id),
        name: q.params.name,
        date: new Date()
    };

    db.insert(user, (err, dta) => {
        if (err)
            r.send(err + "");
        else {
            r.send(dta);
        }
    });
});

app.listen(3000);