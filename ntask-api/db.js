import fs from "fs";
import path from "path";
import Sequelize from "sequelize";

let db = null;

class LoadModels {
  run(sequelize) {
    let models = [];
    const dir = path.join(__dirname, "models");
    fs.readdirSync(dir).forEach((file) => {
      const modelDir = path.join(dir, file);
      const model = sequelize.import(modelDir);
      models[model.name] = model;
    });
    Object.keys(models).forEach((key) => {
      models[key].associate(models);
    });
    return models;
  }
}

module.exports = (app) => {
  if (!db) {
    const config = app.core.config;
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );
    db = {
      sequelize,
      Sequelize,
      models: {},
    };
    db.models = new LoadModels().run(sequelize);
    return db;
  }
};
