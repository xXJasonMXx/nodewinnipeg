const express = require('express');
const server = express();
const path = require('path');
const multer = require('multer');
const upload = multer({dest: 'upload'})
const port = 3000;

server.post('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/post.html'))
})

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/get.html'))
})


server.listen(port, () => {
    console.log(`running on server: ${port}`)
}) 