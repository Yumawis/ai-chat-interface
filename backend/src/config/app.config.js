const { PORT, ALLOWED_CORS } = require("./app.config.json");

const appConfig = {
  port: PORT ?? 5001,
  allowed_cors: ALLOWED_CORS ?? [],
};

module.exports = { appConfig };
