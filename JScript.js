var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text-plain' });
    response.end('hello world');
}).listen(8882);
console.log('server runing at http://172.0.0.1:8882/');