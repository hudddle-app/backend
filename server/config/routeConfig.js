const userRoutes = require("../routes/user/userRoutes");

function routeConfig(app) {
  app.use("/user", userRoutes);
}

module.exports = routeConfig;
