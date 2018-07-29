const express = require('express');
const server = express();
const path = require('path');
const port = 3000;

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
server.get('/products.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'products.html'));
});

server.listen(port, (error) => {
    if(error) {
        console.log('there is an error'+error);
    }
    console.log('running on port: '+port);
});