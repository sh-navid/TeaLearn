"use strict"; //for security always use strict

//Node 14.15.1 LTS
//SSR

//https://dev.to/fayaz/what-is-nuxtjs-ssr-universal-mode-and-how-to-host-it-for-free-3km4
/**
 * Server side rendering used to be a very common thing before, 
 * you must have seen webpages with .jsp, .asp & .php extensions, 
 * it means that a server is controlling the HTML of these pages and 
 * these are not served as static html files, 
 * instead the HTML is responded back to the browser like a API responds back JSON, 
 * and the response headers will be having type 'HTML' for browsers to understand 
 * and render it. SSR apps will be usually having each page rendered seperately 
 * and send back the rendered page when a browser requests it, this is called routing, 
 * where each page will have a route, the catch here is, this requires a backend 
 * cloud server.
 */

//https://www.geeksforgeeks.org/node-js-server-side-rendering-ssr-using-ejs/
//Node.js Server Side Rendering (SSR) using EJS
//Use EJS as Template Engine in Node.js

const exp = require("express");
const app = exp();
const pth = require("path");

//npm i --save ejs

//**NEEDED for ejs.renderFile**
//const ejs = require("ejs");

//read more in: https://ejs.co/

//set EJS as templating engine 
//**VIEW ENGINE SCOPE**
app.set('view engine', 'ejs');
app.set('views', pth.join(__dirname, ''));//change views folder to root of script

app.get("/", (q, r) => {
    //this section do not need **VIEW ENGINE SCOPE**
    //ejs.renderFile("index.ejs", {}, {}, (err, data) => {
    //    if (err) r.end("SSR ERROR");
    //    r.end(data);
    //});

    r.render('index', { arr: ["ALI", "KEVIN"] });
});

app.listen(3000);


//To save moudule in package without downloading
//npm install --save --package-lock-only --no-package-lock <package>

//alternative template engine can be swig