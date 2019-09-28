
const async = require('async');

function myFirstFunction(callback) {
//   callback(null, 'Task 1', 'Task 2');
  callback('ERROR', null);
}
function mySecondFunction(arg1, arg2, callback) {
    // arg1 now equals 'Task 1' and arg2 now equals 'Task 2'
    let arg3 = arg1 + ' and ' + arg2;
    callback(null, arg3);
}
function myLastFunction(arg1, callback) {
    // arg1 now equals 'Task1 and Task2'
    arg1 += ' completed';
    callback(null, arg1);
}

async.waterfall([
    myFirstFunction,
    mySecondFunction,
    myLastFunction,
], function(err, result) {
// result now equals 'Task1 and Task2 completed'
    if(err) {
    console.error(err)
    } else {
        console.log(result);
    }
});