const { DataTypes } = require("sequelize");
const sequelize = require("../database/database.config");

const Calendar = sequelize.define(
    "calendar",
    {
        NoteID: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        Note_title: {
            type: DataTypes.STRING,
        },
        Note_type: {
            type: DataTypes.STRING,
        },
        Note_location: {
            type: DataTypes.STRING,
        },
        Note_date: {
            type: DataTypes.DATE,
        },
        Note_time: {
            type: DataTypes.TIME,
        },
        Note_detail: {
            type: DataTypes.STRING,
        },
        uid: {
            type: DataTypes.STRING, 
        },
        SemesterID: {
            type: DataTypes.STRING, 
        },
           
    },
     {
    createdAt: false,
    updatedAt: false,
}
);
Calendar.sync();
module.exports = Calendar;