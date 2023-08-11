"use strict"; //for security always use strict

//Node 14.15.1 LTS
//Commander

//npm install commander

const { Command } = require('commander');
const program = new Command();
program.version('1.0.0');

program
    .option('-d, --debug')
    .option('-s, --date')
    .option('-p, --info <type>');

program.parse(process.argv);

if (program.debug) console.log(program.opts());
if (program.date) console.log(new Date());
if (program.info) console.log(`->`, program.info);
