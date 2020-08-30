module.exports = (app) => {
  const Tasks = app.db.models.Tasks;
  app.route("/tasks").all((req, res, next) => {
    // middleware pre comands to routes /tasks
    if (req.body) {
      delete req.body.id;
    }
    next();
  }).get((req, res) => {
    Tasks.findAll({ limit: 10 })
      .then((tasks) => {
        res.json({ tasks });
      })
      .catch((error) => {
        res.status(412).json({ error });
      });
  }).post((req, res) => {
    Tasks.create(req.body)
      .then(result => res.json(result))
      .catch((error) => {
        res.status(412).json({ catch:error, request:req.body });
      });
  });
  app.route("/tasks/:id").all((req, res) => {
    // middleware pre comands to routes /tasks/:id
    if (req.body) {
      delete req.body.id;
    }
    next();
  }).get((req, res) => {
    Tasks.findOne({where: req.params})
    .then((result) => {
      if (result) {
        res.json(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((error) => {
      res.status(412).json({ catch:error, request:req.body });
    });
  }).post((req, res) => {
    // create new
  }).put((req, res) => {
    Tasks.update(req.body, {where: req.params})
    .then(() => res.sendStatus(204))
    .catch((error) => {
      res.status(412).json({ catch:error, request:req.body });
    });
  }).delete((req, res) => {
    Tasks.destroy({where: req.params})
    .then(() => res.sendStatus(204))
    .catch((error) => {
      res.status(412).json({ catch:error, request:req.body });
    });
  });
};
