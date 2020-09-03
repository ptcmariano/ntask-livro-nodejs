import helperRequestResolver from '../core/helperRequestResolver'

module.exports = (app) => {
  const Tasks = app.db.models.Tasks;
  app.route("/tasks")
  .get((req, res) => {
    const promisseDb = Tasks.findAll({ limit: 10 });
    helperRequestResolver(promisseDb,res);
  }).post((req, res) => {
    const promisseDb = Tasks.create(req.body);
    helperRequestResolver(promisseDb,res);
  });

  app.route("/tasks/:id")
  .get((req, res) => {
    const promisseDb = Tasks.findOne({where: req.params})
    helperRequestResolver(promisseDb,res);
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
