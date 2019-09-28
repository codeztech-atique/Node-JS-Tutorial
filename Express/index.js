var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}))
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

//Get method
app.get('/submitdata', function (req, res) {  // Design to get the data from the server and appends the from data to the request url
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   fs.writeFile('entry.json', JSON.stringify(response),function(err) { //Design to send the data to the server and It carry unlimited data any any type of data, like image, mp3, mp4, video e.t.c
        if (err) throw err;
        console.log('File Saved!');
   })
   res.end(JSON.stringify(response));
})

// Post Method and please change the method POST from index.html file
// app.get('/submitdata', function (req, res) {
//    // Prepare output in JSON format
//    response = {
//       first_name:req.body.first_name,
//       last_name:req.body.last_name
//    };
//    console.log(response);
//    fs.writeFile('entry.json', JSON.stringify(response),function(err) { 
//         if (err) throw err;
//         console.log('File Saved!');
//    })
//    res.end(JSON.stringify(response));
// })

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})