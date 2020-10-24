import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

module.exports = (app) => {
  app.set("port", 3000);
  app.set("json spaces", 2);
  app.set("x-powered-by", false);
  app.use(morgan("common", {stream:{write: (message) => {
    logger.info(message);
  }}}));
  app.use(cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-type", "Authorization"]
  }));
  app.use(bodyParser.json());
  app.use(app.auth.initialize());
  app.use((req, res, next) => {
    delete req.body.id;
    next();
  });
  app.use(express.static("public"));
};
