var http = require('http');
var setup = require('proxy');

var port = process.env.PORT || 3128;
var server = setup(http.createServer());
server.listen(port, function () {
  var port = server.address().port;
  console.log('HTTP(s) proxy server listening on port %d', port);
});
