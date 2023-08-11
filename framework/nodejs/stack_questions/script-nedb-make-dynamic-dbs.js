//Node 14.15.1 LTS

const exp = require("express");
const app = exp();
const dt = require('nedb');
const db = [];

//USING LOOP and FUNCTION
let list = [{ name: "GasSensor" }, { name: "TempSensor" }];
let index = 0;

//BAD Paractice
let setup = () => {
    if (index + 1 > list.length) return;

    let newInstance = new dt({ filename: 'nodejs/data/nedb_' + list[index].name, autoload: true });

    console.log("Working on index " + (index + 1));

    newInstance.loadDatabase((err) => {
        if (err) {
            //...
        } else {
            db.push(newInstance);
        }

        index++;
        setup();
    });
}

setup();

//USING API
app.get("/make/db/:name", (q, r) => {
    //BAD PRACTICE
    //JUST FOR TEST
    let newInstance = new dt({ filename: 'nodejs/data/nedb_' + q.params.name, autoload: true });

    newInstance.loadDatabase((err) => {
        if (err) {
            console.log(err + "");
            r.send("ERROR");
        }
        else {
            db.push(newInstance);
            console.log("Database is loaded");
            r.send("NEW DB CREATED");
        }
    });
});

app.listen(3000);