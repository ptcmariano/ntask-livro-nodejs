import jwt from "jwt-simple";

module.exports = app => {
  const config = app.core.config;
  const Users = app.db.models.Users;

  app.post("/token", (req,res) => {
    if (req.body.email && req.body.password) {
      const email = req.body.email;
      const password = req.body.password;
      Users.findOne({where: {email: email}})
        .then((user) => {
          if (Users.isPassword(user.password, password)) {
            const payload = {id: user.id};
            res.json({
              token: jwt.encode(payload, config.jwtSecret)
            });
          } else {
            res.status(401).json({ error: 'user and/or password are incorrect' });
          }
        }).catch((err) => {
          res.status(401).json({ error: 'user and/or password are incorrect' });
        });
    }
  });
}