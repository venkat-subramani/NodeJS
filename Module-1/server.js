var http = require('http');

function handleRequest(req, res){
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('My Node Application');
}

var server = http.createServer(handleRequest);
var port = 5555;

server.listen(port);

console.log('Server running at port '+port);