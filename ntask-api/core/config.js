module.exports = app => {
  const env = process.env;
  if (env.NODE_ENV) {
    return require(`./config.${env.NODE_ENV.trim()}.js`);
  }
  return require('./config.development.js');
}