const { DataTypes } = require("sequelize");
const sequelize = require("../database/database.config");

const Student = sequelize.define(
    "student",
    {
        StudentID: {
            type: DataTypes.INTEGER,
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
        Email: {
            type: DataTypes.STRING,
        },
        Password_email: {
            type: DataTypes.STRING,
        },
        Username: {
            type: DataTypes.STRING,
        },
        Password: {
            type: DataTypes.STRING,
        },
        Phone: {
            type: DataTypes.INTEGER,
        },
    },
     {
    createdAt: false,
    updatedAt: false,
}
);
Student.sync();
module.exports = Student;