const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false});
const multer = require('multer');
const upload = multer({dest: 'upload'})
const port = 3000;

server.set('view engine', 'pug');
server.use(express.static('public'));

const superheros = [
    { id: 1, name: 'THOR', image: 'Thor.jpg', desc: 'God of thunder' },
    { id: 2, name: 'IRON MAN', image: 'Ironman.jpg', desc: 'Genius, millionaire wepon person' },
    { id: 3, name: 'DAREDEVIL', image: 'Daredevil.jpg', desc: 'Blind ninja'}
];

server.get('/', (req, res) => {
    res.render('index', {});
});
server.get('/superheros', (req, res) => {
    res.render('heros', {superhero: superheros})
});
server.post('/heroInfo', upload.single('superheroPicture'), (req, res) => {
    const newId = superheros[superheros.length - 1].id + 1;
    const newSuperHero = {
      id: newId, 
      name: req.body.superheroName.toUpperCase(), 
      image: req.file.originalname,
      desc: req.body.superheroDescription
    }
    
    superheros.push(newSuperHero);
    
    res.redirect('/superheros');
});
/*What??? Don't understand the each loop at all. Why superhero(s) here but superhero at heros.pug? Does the s actually do something?*/
server.get('/heroInfo/:id', (req, res) => {
    const selectedId = req.params.id;

    let selectedSuperhero = superheros.filter(superhero => {
        return superhero.id === + selectedId
    })
    selectedSuperhero = selectedSuperhero[0];

    res.render('heroInfo', {superhero: selectedSuperhero})
  });

server.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Running on port: ${port}`);
});