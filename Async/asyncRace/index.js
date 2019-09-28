const async = require('async');

async.race([
    function (callback) {
      setTimeout(function () {
        callback(null, 'one');
      }, 100);
    },
    function (callback) {
      setTimeout(function () {
        callback(null, 'two');
      }, 100);
    },
    function (callback) {
       setTimeout(function () {
        callback(null, 'three');
       }, 200);
     }
    ],
    // main callback
    function (err, result) {
        // the result will be equal to 'two' as it finishes earlier than the other 2
        console.log('The result is ', result);
    });