const { Sequelize } = require("sequelize");
const sequelize = new Sequelize('postgres', 'postgres', '123456', {
    host: '34.126.81.80',
    dialect: "postgres",
    logging: false,
  });

  module.exports = sequelize;