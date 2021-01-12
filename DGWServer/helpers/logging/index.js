
var winston  = require('winston');
var {Loggly} = require('winston-loggly-bulk');


const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log` 
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: `${__dirname}/error.log`, level: 'error' }),
    new winston.transports.File({ filename: `${__dirname}/combined.log` })
  ]
});
 
//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// 
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}





winston.add(new Loggly({
    token: process.env.LOGGLY_TOKEN,
    subdomain: "guitarworkout",
    tags: ["Winston-NodeJS"],
    json: true
}));

winston.log('info', "Hello World from Node.js!");
