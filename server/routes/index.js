const authenticationRoutes = require("./authentication");
const departmentRoutes = require("./departments");
const complaintRoutes = require("./complaints");

module.exports = (app) => {
  app.use("/auth", authenticationRoutes);
  app.use("/dept",departmentRoutes);
  app.use('/complaints',complaintRoutes);
};