const express = require('express');
const server = express();
const port = 3000;

server.set('view engine', 'pug');

server.get('/', (req, res) => {
    res.render('index', {title: 'Learning pug',h1: 'Learning pug'})
})

server.listen(port, () => {
    console.log(`Running on port: ${port}`);
})

server.get('');