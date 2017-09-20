let http = require('http');

let handleRequest = (req, res) => {
    console.log(`Received request for URL: ${req.url}`);
    res.writeHead(200);
    res.end('Hello World, Part Deux!');
};

let server = http.createServer(handleRequest);
let port = 8080;
console.log(`Server listening on port: ${port}...`);
server.listen(port);