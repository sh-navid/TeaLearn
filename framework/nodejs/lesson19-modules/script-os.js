const os = require("os");

console.log(
    os.type(),
    os.platform(),
    os.totalmem() / 8 / 1024 + " MBs",
    os.freemem() / 8 / 1024 + " MBs"
);