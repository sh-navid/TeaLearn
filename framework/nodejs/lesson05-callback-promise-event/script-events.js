"use strict";

const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('fire', () => {
    console.log('Somebody called this event');
});

eventEmitter.emit('fire');