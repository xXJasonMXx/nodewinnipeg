const express = require('express');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const port = 3000;

server.set('view engine', 'pug');

server.get('/', (req, res) => {
    MongoClient.connect(url, function (err, client) {
        console.log(`Connected to the server!`)
        const db = client.db('comics')
        const collection = db.collection('superheroes');

        collection.find({}).toArray((err, documents) => {
            res.render('index', {documents: documents });
            client.close();
        })
    })
})

server.listen(port, (err) => {
    if (err) {
        console.log(`there is an error ${err}`)
    }
    console.log(`Running on port: ${port}`)
})