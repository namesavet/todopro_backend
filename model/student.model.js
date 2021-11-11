const { DataTypes } = require("sequelize");
const sequelize = require("../database/database.config");

const Student = sequelize.define(
    "student",
    {
        StudentID: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        Fullname: {
            type: DataTypes.STRING,
        },
        Name: {
            type: DataTypes.STRING,
        },
        Major: {
            type: DataTypes.STRING,
        },
        Faculty: {
            type: DataTypes.STRING,
        },
        University: {
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
Student.sync();
module.exports = Student;