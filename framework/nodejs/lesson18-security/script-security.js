"use strict";

const exp = require("express");
const app = exp();
const hel = require("helmet");
//app.listen(3000);

//Do not run NodeJS as "ROOT"!!!
//The JWT Should stay in cookies with httpOnly
//Use JSHint/JSLint

//contentSecurityPolicy
//dnsPrefetchControl
//expectCt
//frameguard
//hidePoweredBy
//hsts
//ieNoOpen
//noSniff
//permittedCrossDomainPolicies
//referrerPolicy
//xssFilter
app.use(hel());

//Use streams instead of buffering
app.use(exp.limit("5mb"));