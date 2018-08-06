const express = require('express');
const server = express();
const port = 3000;

server.set('view engine', 'pug');
server.use(express.static('public'));

    const superheros = [
      { id: 1, name: 'THOR', image: 'Thor.jpg' },
      { id: 2, name: 'IRON MAN', image: 'Ironman.jpg' },
      { id: 3, name: 'DAREDEVIL', image: 'Daredevil.jpg' }
    ];

server.get('/', (req, res) => {
    res.render('index', {});
});
server.get('/superheros', (req, res) => {
    res.render('heros', {superheros: superheros})
});
/*What??? Don't understand the each loop at all. Why superhero(s) here but superhero at heros.pug? Does the s actually do something?*/
server.get('/heroInfo', (req, res) => {
    res.render('heroInfo', {superheros: superheros})
  });

server.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Running on port: ${port}`);
});