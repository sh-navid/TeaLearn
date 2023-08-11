"use strict"; //for security always use strict

//Node 14.15.1 LTS
//SQLite

const exp = require("express");
const app = exp();

//yarn add sqlite3
//yarn add sequelize
const { Sequelize, Model, DataTypes } = require('sequelize');
const seq = new Sequelize('db', '', '', {
    host: 'localhost',
    storage: 'nodejs/data/db.sqlite',
    dialect: 'sqlite',
});


//const [res, meta] = seq.query("SELECT ...");


let run = async () => {
    await seq.query('DROP TABLE IF EXISTS DATA');
    await seq.query('CREATE TABLE DATA(ID INTEGER,NAME TEXT);');

    console.log(await seq.query('INSERT INTO DATA (ID,NAME)VALUES(1,"NAME1")'));
    console.log(await seq.query('INSERT INTO DATA (ID,NAME)VALUES(2,"NAME2")'));
    console.log(await seq.query('INSERT INTO DATA (ID,NAME)VALUES(3,"NAME3")'));

    console.log(await seq.query('SELECT * FROM DATA', { type: seq.QueryTypes.SELECT}));

    console.log(await seq.query('UPDATE DATA SET ID=12 WHERE ID=2'));
    console.log(await seq.query('SELECT * FROM DATA', { type: seq.QueryTypes.SELECT}));

    console.log(await seq.query('DELETE FROM DATA WHERE ID=1'));
    console.log(await seq.query('SELECT * FROM DATA', { type: seq.QueryTypes.SELECT}));
}
run();

app.listen(3000);