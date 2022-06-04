const authenticationRoutes = require("./authentication");
const departmentRoutes = require("./departments");


module.exports = (app) => {
  app.use("/auth", authenticationRoutes);
  app.use("/dept",departmentRoutes);
};