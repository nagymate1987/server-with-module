var http = require('http');
var module = require('./multiply-module');

function onRequest(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write(module.moduleMessage);
	module.logProduct(3, 14);
	response.end();
}

http.createServer(onRequest).listen(3000);
console.log('The server is running...');