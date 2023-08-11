//Node 14.15.3 LTS
'use strict';

//NOTE: I THINK THIS IS A BAD PRACTICE
//YOU SHOULD USE STREAM INSTEAD OF BUFFERING

const fss = require('fs')
const pth = require('path');
const exp = require('express');
const swg = require('swig');
const efm = require("formidable");
const app = exp();

const thm = swg.compileFile(pth.join(__dirname, '', 'upload.html'));
app.listen(9009);
app.get(`/`, async (q, r) => r.send(thm({ msg: "Select a File to Upload" })));
app.get(`/:msg`, async (q, r) => r.send(thm({ msg: q.params.msg })));
app.post('/upload', (r, q) => {
    const form = efm({ multiples: true });

    form.parse(r, (e, p, files) => {
        let dir = pth.join(__dirname, '', '/media/');
        if (!fss.existsSync(dir)) fss.mkdirSync(dir);

        let uploaded = 0, exists = 0, error = 0;

        //if single file uploaded
        if(!Array.isArray(files.file)){
            files.file=[files.file]
        }

        files.file.forEach(f => {
            let nPth = dir + f.name;
            try {
                fss.accessSync(nPth, fss.F_OK);
                exists++;
            } catch (file_e) {
                let err = fss.renameSync(f.path, nPth);
                if (err) error++; else uploaded++;
            }
        });

        q.redirect(`Upoader -> All: ${files.file.length}, Uploaded: ${uploaded}, Existed: ${exists}, Error: ${error}`);
    });
});