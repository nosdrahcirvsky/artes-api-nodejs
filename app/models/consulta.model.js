module.exports = (sequelize, Sequelize) => {
  const Consulta = sequelize.define("consulta", {
    busca: {
      type: Sequelize.STRING
    }
  });

  return Consulta;
};
