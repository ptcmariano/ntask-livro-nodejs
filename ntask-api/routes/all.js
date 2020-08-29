module.exports = (app) => {
  const allRoutes = app.routes;
  app.get("/", (req, res) => {
    res.json({
      request: req.route,
      allRoutes: allRoutes
    });
  });
};