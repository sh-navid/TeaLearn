"use strict"; //for security always use strict

//Node 14.15.1 LTS
//Convert to PDF

//npm install phantom
//yarn add phantom
//npm install ip
//yarn add ip

const exp = require('express');
const app = exp();
const pth = require("path");
const phantom = require('phantom');
const ip = require("ip");

const PORT = 3000;
const PDF_SOURCE = "index"; //index.html
const PDF_OUTPUT = "out"; //out.pdf

const source = pth.join(__dirname, "", `${PDF_SOURCE}.html`);
const output = pth.join(__dirname, "", `${PDF_OUTPUT}.pdf`);

app.use("/" + PDF_SOURCE, exp.static(source));
app.use("/" + PDF_OUTPUT, exp.static(output));

app.listen(PORT);

let makePDF = async (fn) => {
    let local = `http://${ip.address()}:${PORT}/${PDF_SOURCE}`;
    phantom.create().then((ph) => {
        ph.createPage().then((page) => {
            page.open(local).then(() =>
                page.render(output).then(() => { ph.exit(); fn() })
            );
        });
    });
}

makePDF(() => {
    console.log("PDF Created From Local File");
    console.log("PDF is downloadable from link:");
    console.log(`http://${ip.address()}:${PORT}/${PDF_OUTPUT}`);
});