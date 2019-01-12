var http = require('http')
var fs = require('fs')
var server = http.createServer();

server.on('request', doRequest);

server.listen(3000);

function doRequest(req, res) {
    fs.readFile('./index.html', 'UTF-8', 
        (error, data)=>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
    })
};