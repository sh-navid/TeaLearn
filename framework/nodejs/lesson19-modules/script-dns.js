const dns = require('dns');

dns.lookup('www.github.com', (err, adr, family) => {
    console.log(adr, family, err);
    dns.reverse(adr, (err_dns, hostnames) => {
        console.log(JSON.stringify(hostnames), err_dns);
    });
});