const bunyan = require('bunyan');

function createLogger(name) {
    return bunyan.createLogger({ name });
}
    
module.exports = { createLogger };

