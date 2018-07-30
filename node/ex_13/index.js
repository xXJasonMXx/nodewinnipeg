const express = require('express');
const server = express();
const port = 3000;

server.listen(port, (error) => {
    if (error) {
        console.log('there is an error: '+error);
    }
    console.log('running on port: '+port);
})

const home = require('./home.js');
const user = require('./user.js');

server.use('/', home);
server.use('/user', user);