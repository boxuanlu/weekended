var https = require('https');
//var data = '';
//console.log('i did it !');


var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};
var callback = function(response) {
  console.log('In response handler callback!');
//data handler
  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH' + chunk.length + ' --]');
    console.log(chunk.toString());
    //data += chunk;
    //console.log(data);
  });

}

console.log("i'm about to make the request");
https.request(options, callback).end();
console.log("I've made the request!");
