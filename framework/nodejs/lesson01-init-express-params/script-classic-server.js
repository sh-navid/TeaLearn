"use strict";

const http = require('http');

var server = http.createServer((q, r) => {  
    if (q.url == '/') { 
        r.writeHead(200, { 'Content-Type': 'text/html' });
        r.write('ROOT');
        r.end();
    }
    else if (q.url == "/data") {
        r.writeHead(200, { 'Content-Type': 'text/html' });
        r.write('DATA');
        r.end();
    }
});

server.listen(3000);