const express = require('express');
const server = express();
const port = 3000;

const requestTime = (req, res, next) => {
    const message = `Request: ${req.baseUrl} ${Date.now()}`;
    console.log(message);

    next();
}
server.use(requestTime);

server.get('/', (req, res) => {
        res.json({
        "status": 200,
        "message": "Este request/response está OK"
    })
server.listen(port, () => {
        console.log('running on port: '+port)
    })
})
