import { expect } from 'chai';
import fs from 'fs';

describe("Routes: Index", () => {
  describe("GET /", () => {
    it("returns the API status", (done) => {
      request
        .get("/")
        .expect(200)
        .end((err, res) => {
          const expected = { request: { path:"/" } };
          expect(res.body.request.path).to.eql(expected.request.path);
          done(err);
        });
    });
    it("should create log", (done) => {
      request
        .get("/")
        .expect(200)
        .end((err, res) => {
          const expected = { request: { path:"/" } };
          expect(res.body.request.path).to.eql(expected.request.path);
          let logFile = null;
          logFile = fs.readFileSync('logs/app.log');
          expect(logFile).be.not.null;
          done(err);
        });
    });
  });
});
