const winston = require('winston');
const logger = winston.createLogger({
    transports: [
      new winston.transports.File({ filename: 'logs/error.log' })
    ]
  });
  function miFuncion() {
    throw new Error('Ocurrió un error personalizado');
  }
  try {
    miFuncion();
  } catch (error) {
    logger.error(error.message);
  }