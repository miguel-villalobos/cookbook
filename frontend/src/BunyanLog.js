var bunyan = require('bunyan');

var log = bunyan.createLogger({name: 'bunyanlog'});
log.info('asdf');
