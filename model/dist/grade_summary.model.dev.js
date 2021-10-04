"use strict";

var _require = require("sequelize"),
    DataTypes = _require.DataTypes;

var sequelize = require("../database/database.config");

var Grade_sumary = sequelize.define("grade_sumary", {
  Grade_sumaryID: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  GPA: {
    type: DataTypes.DOUBLE
  },
  GPA_simulation: {
    type: DataTypes.DOUBLE
  },
  StudentID: {
    type: DataTypes.STRING
  },
  SemesterID: {
    type: DataTypes.STRING
  }
}, {
  createdAt: false,
  updatedAt: false
});
Grade_sumary.sync();
module.exports = Grade_sumary;