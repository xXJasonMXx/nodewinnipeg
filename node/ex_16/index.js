const express = require('express');
const server = express();
const port = 3000;

server.listen(port, () => {
    console.log('running on port: '+port);
})

server.use('/assets',express.static('public'));
server.use('/',express.static('root'));