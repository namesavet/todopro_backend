const { DataTypes } = require("sequelize");
const sequelize = require("../database/database.config");

const Semester = sequelize.define(
    "semester",
    {
        SemesterID: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        Semester_name: {
            type: DataTypes.STRING,
        },
        uid: {
            type: DataTypes.STRING,
        },       
    },
     {
    createdAt: false,
    updatedAt: false,
}
);
Semester.sync();
module.exports = Semester;