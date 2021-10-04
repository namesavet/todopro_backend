const { DataTypes } = require("sequelize");
const sequelize = require("../database/database.config");

const Subject = sequelize.define(
    "subject",
    {
        SubjectID: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        Subject_name: {
            type: DataTypes.STRING,
        },
        Intal_name: {
            type: DataTypes.STRING,
        },
        Teacher_name: {
            type: DataTypes.STRING,
        },
        IDsubject: {
            type: DataTypes.STRING,
        },
        Credit: {
            type: DataTypes.STRING,
        },
        GradeA: {
            type: DataTypes.INTEGER,
        },
        GradeBplus: {
            type: DataTypes.INTEGER,
        },
        GradeB: {
            type: DataTypes.INTEGER,
        },
        GradeCplus: {
            type: DataTypes.INTEGER,
        },
        GradeC: {
            type: DataTypes.INTEGER,
        },
        GradeDplus: {
            type: DataTypes.INTEGER,
        },
        GradeD: {
            type: DataTypes.INTEGER,
        },
        Date_midterm_exam: {
            type: DataTypes.DATE,
        },
        Date_final_exam: {
            type: DataTypes.DATE,
        },
        Score_midterm: {
            type: DataTypes.INTEGER,
        },
        Score_final: {
            type: DataTypes.INTEGER,
        },
        Desired_grade: {
            type: DataTypes.STRING,
        },
        StudentID: {
            type: DataTypes.STRING,
        },
        SemesterID:{
            type: DataTypes.STRING,
        }
       
    },
     {
    createdAt: false,
    updatedAt: false,
}
);
Subject.sync();
module.exports = Subject;