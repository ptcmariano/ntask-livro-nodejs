const { expect } = require("chai");

describe("Route: Token", () => {
  const Users = app.db.models.Users;
  const MOCK_USER = {
    name: 'Mocha',
    email: 'mocha@test.net',
    password: '123'
  };
  describe("POST /token", () => {
    beforeEach(done => {
      // pre test
      Users.destroy({where: {}})
        .then(() => Users.create(MOCK_USER))
        .then(() => done())
    });
    describe("status 200", () => {
      it("return authenticed user", () => {
        request.post("/token")
          .send({
            email: MOCK_USER.email,
            password: MOCK_USER.password
          })
          .expect(200)
          .end((err, res) => {
            expect(res.body).to.include.keys("token");
            done(err);
          });
      });
    });
    describe("status 401", () => {
      it("throw exception when send password incorrect", () => {
        request.post("/token")
          .send({
            email: MOCK_USER.email,
            password: MOCK_USER.password
          })
          .expect(401)
          .end((err, res) => {
            done(err);
          });
      });
    });
  });
});
