class RequestResolver {
  run(promisseDb, response) {
    promisseDb
    .then((tasks) => {
      response.json({ tasks });
    })
    .catch((error) => {
      response.status(412).json({ error });
    });
  }
}

module.exports = (promisseDb, response) => {
  new RequestResolver().run(promisseDb, response);
}