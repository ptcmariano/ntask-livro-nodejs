import bodyParser from 'body-parser'

module.exports = (app) => {
  app.set("port", 3000);
  app.set("json spaces", 2);
  app.set("x-powered-by", false);
  app.use(bodyParser.json())
  app.use((req, res, next) => {
    delete req.body.id;
    next();
  })
};
