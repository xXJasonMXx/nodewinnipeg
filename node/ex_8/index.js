const http = require('http');
const port = 3001;

const requestHandler = (request, response) => {
    response.end('I\'m using my first Node.js Web Server');
}

const server = http.createServer(requestHandler);

server.listen(port, (e) => {
    if (e) {
        console.log(`Unable to start on port ${port}`);
    }
    console.log('This server is running on port: '+port);
})
