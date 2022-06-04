module.exports = app => {
  const arts = require("../controllers/api.controller.js");

  var router = require("express").Router();

  // Obter todas as obras
  router.get("/", arts.findAll);

  // Filtrar por campo
  router.get("/filter/:field", arts.filterBy);

  app.use('/api', router);
};
