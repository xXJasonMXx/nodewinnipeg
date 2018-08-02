const express = require('express');
const server = express();
const port = 3000;

server.get('/', (req, res) => {
    res.render('index.pug', {title: 'Learning pug',h1: 'Learning pug'})
})
server.get('/second', (req, res) => {
    res.render('second.pug')
})
server.get('/second'), (req, res) => {
    res.sendFile('style.css')
}

server.listen(port, () => {
    console.log(`Running on port: ${port}`);
})