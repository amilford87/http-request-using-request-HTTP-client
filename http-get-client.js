var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
    .on('error', function(err) {
        throw err;
    })
    .on('response', function (response){
        console.log("Status: " + response.statusMessage + "Type: " + response.headers['content-type']);
    })
    .on('data', function (data){
        console.log('Downloading image...');
    })
    
    .pipe(fs.WriteStream('./future.jpg'))
    
    .on('finish', function (response){
        console.log("Download complete");
    });

