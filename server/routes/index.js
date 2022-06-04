const authenticationRoutes = require("./authentication");

module.exports = (app) => {
  app.use("/auth", authenticationRoutes);
};