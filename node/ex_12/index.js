const express = require('express');
const server = express();
const port = 3000;

server.get('/api/products', (req, res) => {
    res.json({
        description: 'Products',
        items: [
          { name: 'Star Wars jacket' , price: 100},
          { name: 'FIFA 22 PS4' , price: 79},
          { name: 'Superheore t-shirt' , price: 10},
          { name: 'Jets game shirt' , price: 200},
          { name: 'Large Meat lovers pizza' , price: 12},
          { name: 'Canada Dry  bottle' , price: 2}
        ]
      })
})

server.listen(port, (error) => {
    if(error) {
        console.log('there is an error: '+error);
    }
    console.log('running on server: '+port);
}) 