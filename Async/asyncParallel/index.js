const async = require('async');


//Async parallel

// var stack = [];

// var functionOne = function(callback) {
//     // callback(null, 'First function result') 
//    callback('Problem in function One', null); //Error
// }

// var functionTwo = function(callback) {
//     callback(null, 'Second function result')
// }

// var functionThree = function(callback) {
//     callback(null, 'Second function result')
// }

// stack.push(functionOne);
// stack.push(functionTwo);
// stack.push(functionThree);

// async.parallel(stack, function(err, result) {
//    if(err) {
//        console.error("Error - "+err)
//    } else {
//        console.log(result)
//    }
// })


// Other Example async parallel using setTimeout

async.parallel([
    function(callback) {
      setTimeout(function() {
        console.log('Task One');
        callback(null, 1);
      }, 200);
    },
    function(callback) {
      setTimeout(function() {
        console.log('Task Two');
        callback(null, 2);
      }, 100);
    }
  ],
  function(err, results) {
    console.log(results);
    // the results array will equal [1, 2] even though
    // the second function had a shorter timeout.
  });