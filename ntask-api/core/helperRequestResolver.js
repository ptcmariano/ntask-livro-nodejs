class RequestResolver {
  run(promisseDb, response) {
    promisseDb
    .then((result) => {
      if (result) {
        response.json(result);
      } else {
        response.sendStatus(404);
      }
    })
    .catch((error) => {
      response.status(412).json({ catch:error, request:req.body });
    });
  }
}

module.exports = (promisseDb, response) => {
  new RequestResolver().run(promisseDb, response);
}