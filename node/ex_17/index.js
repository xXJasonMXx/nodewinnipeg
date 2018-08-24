const express = require('express');
const server = express();
const port = 3000;

server.get('/', (req, res) => {
    res.render('index.pug', {title: 'Learning pug',h1: 'Learning pug'})
})
server.get('/second', (req, res) => {
    res.render('second.pug')
})

server.get('/third', (req, res) => {
    res.render('third.pug')
})
server.get('/fourth', (req, res) => {
    res.render('fourth.pug')
})

    server.use(express.static(__dirname+'/css'));
    server.use(express.static(__dirname+'/js'));
    server.use(express.static(__dirname+ '/public'))

server.listen(port, () => {
    console.log(`Running on port: ${port}`);
})