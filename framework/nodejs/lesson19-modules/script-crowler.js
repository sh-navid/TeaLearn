// //npm i --save crawler

const Crawler = require("crawler");

const c = new Crawler({
    maxConnections: 10,
    callback: (err, res, done) => {
        if (err) {
            console.log(err);
        } else {
            var $ = res.$;
            console.log($("title").text());
            console.log(res.body.length, 'bytes');
        }
        done();
    }
});

c.queue('http://www.github.com');
c.queue('http://www.google.com');