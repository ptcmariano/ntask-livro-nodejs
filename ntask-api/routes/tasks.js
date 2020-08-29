module.exports = (app) => {
  const Tasks = app.db.models.Tasks;
  app.get("/tasks", (req, res) => {
    Tasks.findAll({ limit: 10 })
      .then((tasks) => {
        res.json({ tasks });
      })
      .catch((err) => {
        res.json({ err });
      });
  });
  const allRoutes = app.routes;
  app.get("/all", (req, res) => {
    res.json({ allRoutes });
  });
};
