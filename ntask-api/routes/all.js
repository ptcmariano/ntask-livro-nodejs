module.exports = (app) => {
  const allRoutes = app.routes;
  /**
   * @api {get} / API status
   * @apiGroup Status
   * @apiSuccess {String} status OK da API + todas rotas
   * @apiSuccessExample {json} sucesso
   *     HTTP/1.1 200 OK
   *     {
            "request": {
              "path": "/",
              "methods": {
                "get": true
              }
            }
          }
   */
  app.get("/", (req, res) => {
    res.json({
      request: req.route,
      allRoutes: allRoutes
    });
  });
};