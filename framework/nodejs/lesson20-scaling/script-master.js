const fs = require('fs');
const ch = require('child_process');
const pth = require("path");

//exec  -> run a command in console
//spawn -> run a new process
//fork  -> run a node process

let x = [12, 13, 14, 15];
let y = [15, 14, 13, 12];

for (var i = 0; i < x.length; i++) {
    var workerProcess = ch.fork(pth.join(__dirname, "script-child.js"), [i,x[i],y[i]]);

    workerProcess.on('exit', (code) => {
        //console.log('Exit ' + code);
    });
}