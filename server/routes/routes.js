const { getTvs } = require("../controllers/itemCtrl/itemCtrl");
//state each route
module.exports = app => {
  app.get("/api/tv", getTvs);
};
