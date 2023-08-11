"use strict"; //for security always use strict

//Node 14.15.1 LTS
//https://web.dev/promises/

const exp = require("express");
const app = exp();

let call = (i) => {
    let ret = i * 2;
    return ret;
};

let callback = (i, fn) => {
    let ret = i * 3;
    fn(ret);
}

let promise = new Promise((resolve, reject) => {

    //do async things
    //...

    if (1 == 1) {
        resolve("Everything is OK: " + (12 * 4));
    } else {
        reject("There is an error");
    }
});

//we can make a promise better like this:
let promise_caller = (i) => {
    return new Promise((resolve, reject) => {
        
        //do async things
        //...

        if (i > 0) {
            resolve(i * 5);
        } else {
            reject("Number should be greater than 0");
        }
    });
}

/**
 * At their most basic, promises are a bit like event listeners except:

A promise can only succeed or fail once. It cannot succeed or fail twice, neither can it switch from success to failure or vice versa.
If a promise has succeeded or failed and you later add a success/failure callback, the correct callback will be called, even though the event took place earlier.
This is extremely useful for async success/failure, because you're less interested in the exact time something became available, and more interested in reacting to the outcome.

 */

/**
 * A promise can be:

fulfilled - The action relating to the promise succeeded
rejected - The action relating to the promise failed
pending - Hasn't fulfilled or rejected yet
settled - Has fulfilled or rejected
 */

let res = call(12);
console.log(res);

callback(12, (res) => {
    console.log(res);
});

promise.then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});

promise_caller(12).then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});

promise_caller(-20).then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});