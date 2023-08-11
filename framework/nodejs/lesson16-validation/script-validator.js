//Node 14.15.3 LTS
"use strict"; //for security always use strict

//npm install validator

const val = require('validator');

//Banking
// -> isBIC(/*SWIFT*/), isBtcAddress(), isCreditCard(), isEthereumAddress()
// -> isIBAN(/*International Bank Account Number*/)

//IP
//-> isIP(), isIPRange()

//Other
// -> isDate(), isDecimal(), isBoolean(), isFloat()
// -> isJSON(), isJWT(), isMimeType(), isMobilePhone(), isPassportNumber()
// -> isStrongPassword()
// -> isUUID(/*ver 3, 4 or 5*/)

//Hash
// 'md4', 'md5', 'sha1', 'sha256', 'sha384', 'sha512', 
// 'ripemd128', 'ripemd160', 'tiger128', 'tiger160', 'tiger192', 'crc32', 'crc32b'
// -> isHash();

console.log(val.isEmail('aa@bb.com'),"This is an email");

console.log(val.equals('AA','AA'),"First string is equal to second string");

console.log(val.isAfter('2012-02-11','2012-02-10'),"First Date is after second date");

console.log(val.isBefore('2012-02-11','2012-02-10'),"First Date is before second date");

console.log(val.isAlpha("سس","fa-IR"),"Is Alphabets");

console.log(val.isAlphanumeric("سس","fa-IR"),"Is Alphanumeric");

console.log(val.isAscii("AaBb"),"Is Ascii");

console.log(val.isBase64("aGVsbG8="),"Is isBase64");

console.log(val.matches("hello","hello"),"Regex");