const oneLinerJoke = require('one-liner-joke');
const joke = oneLinerJoke.getRandomJoke()
const express = require('express');
const server = express();
const port = 3000;

server.get('/', (request, response) => {
    response.send(joke);
})
server.get('/joke', (req, res) => {
    res.send(joke);
})
server.post('/joke', (req, res) => {
    res.send('My yokes are too good 4 U')
})
server.put('/joke', (req, res) => {
    res.send('not changing my act');
})
server.delete('/joke', (req, res) => {
    res.send('good jokes never get too old');
})
server.all('/joke', (req, res) => {
    res.send('I know I\'m so good that you\'re looking everywhere');
})

server.listen(port, (error) => {
    if (error) {
    console.log('there seems to be an error'+error);
    }
    console.log('running on server: '+port)
})