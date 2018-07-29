const express = require('express');
const server = express();
const logger = require('logplease');
const log = logger.create('')
const port = 3000;

server.get('/', (request, response) => {
    response.send('Congrats you\'re using your first Node.js and Express as Web Server');
})

server.listen(port, (err) => {
    if(err) {
        log.info('Unable to start the server on port: '+port);
    }
    log.info('This server is running on port: '+port)
})