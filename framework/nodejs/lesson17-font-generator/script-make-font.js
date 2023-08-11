//Node 14.15.3 LTS
"use strict"; //for security always use strict

// // npm install --save-dev webfont

const fnt = require("webfont").default;
const pth = require("path");
const fs = require("fs");

//make "export" folder manually if not exists
const EXPORT = pth.join(__dirname, "export", "MF");

console.log(EXPORT);

fnt({
    files: pth.join(__dirname, "fonts", "*.svg"),
    fontName: "MyFont"
}).then(res => {
    //console.log(res);

    console.log(" -->", res.ttf);
    console.log(" -->", res.eot);
    console.log(" -->", res.woff);
    console.log(" -->", res.woff2);

    fs.writeFileSync(EXPORT + ".ttf", res.ttf);
    fs.writeFileSync(EXPORT + ".eot", res.eot);
    fs.writeFileSync(EXPORT + ".woff", res.woff);
    fs.writeFileSync(EXPORT + ".woff2", res.woff2);

    return res;
}).catch(err => {
    throw err;
});