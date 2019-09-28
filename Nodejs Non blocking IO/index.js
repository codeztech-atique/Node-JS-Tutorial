const fs = require('fs');

// Blocking IO

// var contents = fs.readFileSync('file.txt', 'utf8');
// console.log(contents);

// console.log('after calling readFile');



// NON-Blocking IO Example

fs.readFile('file.txt','utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
 });
console.log('after calling readFile');
