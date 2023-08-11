//important this code is not mine but i do not remember from where i copied

"use strict";

const exp = require('express');
const fss = require('fs');
const pth = require('path');
const app = exp();
app.listen(3000);

const os = require('os-utils');
setInterval(() => {
    os.cpuUsage((v) => {
        console.log('CPU Usage (%): ' + v);
        console.log(os.totalmem());
        console.log(os.freemem());
    });


}, 1000);

app.get('/', (q, r) => {
    r.sendFile(pth.join(__dirname + '/index.html'))
});

app.get('/stream', (q, r) => {
    const path = 'videos/cartoon.mp4';
    const stat = fss.statSync(path);
    const fileSize = stat.size;
    const range = q.headers.range;

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

        if (start >= fileSize) {
            r.status(416).send('Requested range not satisfiable\n' + start + ' >= ' + fileSize);
            return
        }

        const chunksize = (end - start) + 1;
        const file = fss.createReadStream(path, { start, end });
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        };

        r.writeHead(206, head);
        file.pipe(r);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };
        r.writeHead(200, head);
        fss.createReadStream(path).pipe(r);
    }
});