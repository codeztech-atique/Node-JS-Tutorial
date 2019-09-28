
//Example of single promise resolve and reject

// var somevar = false;

// var PTest = function () {
//     return new Promise(function (resolve, reject) {
//         if (somevar === true)
//             resolve();
//         else
//             reject();
//     });
// }
// var myfunc = PTest();


// myfunc.then(function () {
//     console.log("Promise Resolved");
// }).catch(function() {
//     console.log("Promise Rejected");
// });


//Multiple promisses resolve at a time using promiss all

const fetch = require('node-fetch');
const promise1 = Promise.resolve('I am done');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
   setTimeout(resolve, 2000, 'Goodbye')
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then(res => console.log(res));