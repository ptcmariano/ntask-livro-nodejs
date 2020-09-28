import { expect } from 'chai';
import jwt from 'jwt-simple'

describe("Routes: Tasks", () => {
  const Users = app.db.models.Users;
  const Tasks = app.db.models.Tasks;
  const jwtSecret = app.core.config.jwtSecret;
  const MOCK_USER = {
    name: 'Mocha',
    email: 'mocha@test.net',
    password: '123'
  };
  const FIRST_TASK = "Work";
  const SECOND_TASK = "Study";
  let token;
  let fakeTest;

  beforeEach(done => {
    Users.destroy({where: {}})
    .then(() => Users.create(MOCK_USER)
      .then(user => {
        Tasks.destroy({where: {}})
        .then(() => Tasks.bulkCreate([{
          title: FIRST_TASK, user_id: user.id
        },{
          title: SECOND_TASK, user_id: user.id
        }]))
          .then(tasks => {
            fakeTest = tasks[0];
            token = jwt.encode({id: user.id}, jwtSecret);
            done();
          })
      })
    )
  })
  describe("GET /tasks", () => {
    it("return list of tasks with status 200", done => {
      // arrange
      request.get("/tasks")
        .set("Authorization", ` JWT ${token}`)
      //act
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.have.length(2);
          expect(res.body[0].title).to.equal(FIRST_TASK);
          expect(res.body[1].title).to.equal(SECOND_TASK);
          done(err);
        })
      //assert
    })
  })
  describe("POST /tasks", () => {
    it("create a new task with status 200", done => {
      request.post("/tasks")
        .set("Authorization",	`JWT	${token}`)
        .send({title:	"Run"})
        .expect(200)
        .end((err,	res)	=>	{
            expect(res.body.title).to.eql("Run");
            expect(res.body.done).to.be.false;
            done(err);
        });
    })
  })
  // describe("GET /tasks/:id", () => {
  //   it("return a task with status 200", done => {
  //     //
  //   })
  //   it("throw error when task not exist with status 404", done => {
  //     //
  //   })
  // })
  // describe("PUT /tasks/:id", () => {
  //   it("update a task with status 204", done => {
  //     //
  //   })
  // })
  // describe("DELETE /tasks/id", () => {
  //   it("remove a task with status 204", done => {
  //     //
  //   })
  // })
})