import logger from './logger';
// *** use this only in development
module.exports = {
  database: "ntask",
  username: "root",
  password: "",
  params: {
    dialect: "mysql",
    logging: (sql) => {
      logger.info(`[${new Date()}] ${sql}`);
    }
  },
  jwtSecret: "NT4sk#AP1",
  jwtSession: {session:false}
};
