import helperRequestResolver from '../core/helperRequestResolver'

module.exports = app => {
  const Users = app.db.models.Users;

  app.route("/user")
  .all(app.auth.authenticate())
  .get((req, res) => {
    const promisseDb = Users.findById(req.params.id, {
      attributes: ["id", "name", "email"]
    });
    helperRequestResolver(promisseDb,res);
  })
  .delete((req, res) => {
    const promisseDb = Users.destroy({where: req.params.id});
    helperRequestResolver(promisseDb,res);
  });

  
  app.post("/users", (req, res) => {
    const promisseDb = Users.create(req.body);
    helperRequestResolver(promisseDb,res);
  });
}
