const { createLogger, transports, format } = require('winston');
const logLevel = "debug";
const custom = (info) => {
  return `[${info.level.toUpperCase().padEnd(7)}]: ${info.message}`
}
const customFormat = format.combine(format.timestamp(), format.printf(custom),format.colorize({all:true}))


const logger = createLogger({
  // format: format.combine(
  //   format.timestamp(),
  //   format.json(),
  //   format.colorize({all:true}),
  // ),
  format:customFormat,
  transports: [
    new transports.Console({colorize:true}),
    new transports.File({ filename: 'app.log', level: 'debug'})
  ]
});
// const winston = require('winston');
// const logger = winston.createLogger({
//     transports: [
//         new winston.transports.Console({
//             format: winston.format.combine(
//                 winston.format.colorize(),
//                 winston.format.simple()
//             )
//         })
//     ]
// });
// global.logger = logger

module.exports = logger;