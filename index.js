var http = require('http');
var debug = require("debug")('recepnet');
var fs = require('fs');
var after = require("after-time");
var doc;

read();

http.createServer(server).listen(9009, '0.0.0.0');
debug('Server running at 127.0.0.1:9009');

function server (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(doc);
}

function read () {
  debug('Reading ips.json');
  doc = fs.readFileSync('./ips.json');
  after('10 minutes', read);
}
