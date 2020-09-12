import express from "express";
import consign from "consign";

const app = express();

consign({verbose:false})
  .include("core/config.js")
  .include("db.js")
  .include("auth.js")
  .include("core/middlewares.js")
  .include("core/boot.js")
  .then("routes")
  .into(app);

module.exports = app