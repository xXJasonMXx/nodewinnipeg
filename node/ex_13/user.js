const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Please log to get a user</h1>');
});
router.post('/', (req, res) => {
    res.send('Please log to create a user');
});
router.put('/', (req, res) => {
    res.send('Please log to update a user');
});
router.delete('/', (req, res) => {
    res.send('Please log to delete a user');
});

module.exports = router;