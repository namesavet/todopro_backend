const { DataTypes } = require("sequelize");
const sequelize = require("../database/database.config");
const Grade_sumary = sequelize.define(
	"grade_sumary",
	{
		Grade_sumaryID:{
			type:DataTypes.UUID,
			primaryKey:true,
		},
		GPA:{
			type:DataTypes.DOUBLE,
		},
		GPA_simulation:{
			type:DataTypes.DOUBLE,
		},
		StudentID:{
			type:DataTypes.STRING,
		},
		SemesterID:{
			type:DataTypes.STRING,
		},
	},
	{
	createdAt:false,
	updatedAt:false,
}
);
Grade_sumary.sync();
module.exports = Grade_sumary;