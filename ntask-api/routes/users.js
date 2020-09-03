import helperRequestResolver from '../core/helperRequestResolver'

module.exports = app => {
  const Users = app.db.models.Users;

  app.get("/users/:id", (req, res) => {
    const promisseDb = Users.findById(req.params.id, {
      attributes: ["id", "name", "email"]
    });
    helperRequestResolver(promisseDb,res);
  });
  app.post("/users", (req, res) => {
    const promisseDb = Users.create(req.body);
    helperRequestResolver(promisseDb,res);
  });
  app.delete("/users/:id", (req, res) => {
    const promisseDb = Users.destroy({where: req.params.id});
    helperRequestResolver(promisseDb,res);
  });
}
