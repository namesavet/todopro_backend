"use strict";

var _require = require("sequelize"),
    DataTypes = _require.DataTypes;

var sequelize = require("../database/database.config");

var Chapter = sequelize.define("chapter", {
  ChapterID: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  Chapter_name: {
    type: DataTypes.STRING
  },
  Status: {
    type: DataTypes.BOOLEAN
  },
  StudentID: {
    type: DataTypes.STRING
  },
  SubjectID: {
    type: DataTypes.STRING
  },
  SemesterID: {
    type: DataTypes.STRING
  }
}, {
  createdAt: false,
  updatedAt: false
});
Chapter.sync();
module.exports = Chapter;