module.exports = (app) => {
  const PORT = app.get("port");
  if (process.env.NODE_ENV !== "test") {
    
  }
  app.db.sequelize.sync().done(() => {
    app.listen(PORT, () =>
      console.log(`NTASK RUNNING API - http://localhost:${PORT}`)
    );
  });
};
