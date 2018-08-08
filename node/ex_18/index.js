const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extend: false});
/*Why use body-Parser at all and not just always use multer?*/
const multer = require('multer');
const upload = multer({dest: 'upload'});
const path = require('path');
const port = 3000;

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});
server.post('/products', upload.single('avatar'), (req, res) => {
    const filename = req.file.originalname;
    const username = req.body.username;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    
    console.log(req.body);
    console.log(req.file);
    
    res.send(`Congrats we uploaded the following file ${req.body} and info: ${username} ${firstname} ${lastname}`);
  });

  server.listen(port, (err) => {
      if (err) {
          console.log(err);
      }
      console.log(`Running on port: ${port}`)
  })