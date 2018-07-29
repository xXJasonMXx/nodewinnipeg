const numbers = require('./numbers.js');
const logger = require('logplease');
const log = logger.create('');
const answer = function() {
    if(numbers(num)) {
        log.info(num+' is even')
    } else {
        log.info(num+' is odd')
    }
}

let num = 12345

answer()