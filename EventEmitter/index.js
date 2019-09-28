var events = require('events');

var eventEmitter = new events.EventEmitter();

console.log('Start');

eventEmitter.on('event1', () => {
   console.log('Event 1');
})
eventEmitter.on('event2', () => {
   console.log('Event 2');
})
eventEmitter.on('event3', () => {
   console.log('Event 3');
})

console.log('End');

eventEmitter.emit('event1');
eventEmitter.emit('event2');
eventEmitter.emit('event3');


