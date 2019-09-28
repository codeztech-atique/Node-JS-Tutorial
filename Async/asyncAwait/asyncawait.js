//Using As Async simple way we can avoid promises


var fs = require('fs');


var myObj = {};


function doA() {
    return new Promise(function(resolve, reject){
        fs.readFile('file1.txt', function(err, data) {
            if(!err) {
                resolve(data.toString())
            }
         });         
    })
}

function doB() {
    return new Promise(function(resolve, reject){
        fs.readFile('file2.txt', function(err, data) {
            if(!err) {
                resolve(data.toString())
            }
        });
    })
}

// doA().then(function(data) {
//    myObj['data1'] = data;
//    doB().then(function(data2) {
//       myObj['data2'] = data2;
//       console.log(myObj);
//    });
// });

//Async

async function main() {
    myObj['data1'] = await doA();
    myObj['data2'] = await doB();
    console.log(myObj);
}

main()
