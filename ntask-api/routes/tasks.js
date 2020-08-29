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
        console.log('req',req.body)
        res.status(412).json({ catch:error, request:req.body });
      });
  });
  app.route("/tasks/:id").all((req, res) => {
    // middleware pre comands to routes /tasks/:id
  }).get((req, res) => {
    // get unique task
  }).post((req, res) => {
    // create new
  }).put((req, res) => {
    // update
  }).delete((req, res) => {
    // /\
  });
};
