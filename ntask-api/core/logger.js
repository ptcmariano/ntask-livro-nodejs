import fs from 'fs';
import winston from 'winston';


const logsFolder = "logs"
if (!fs.existsSync(logsFolder)) {
  fs.mkdirSync(logsFolder)
}

module.exports = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: "info",
      filename: "logs/app.log",
      maxsize: 1048576,
      maxFiles: 5,
      colorize: false
    })
  ]
})