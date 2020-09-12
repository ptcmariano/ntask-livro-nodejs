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
  });
});
