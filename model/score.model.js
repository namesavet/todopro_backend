const { DataTypes } = require("sequelize");
const sequelize = require("../database/database.config");
const Score = sequelize.define(
	"score",
	{
		ScoreID: {
			type:DataTypes.UUID,
			primaryKey:true,
		},
		Score_title:{
			type:DataTypes.STRING,
		},
		Get_point:{
			type:DataTypes.INTEGER,
		},
		Full_point:{
			type:DataTypes.INTEGER,
		},
		SubjectID:{
			type:DataTypes.STRING,
		},
		uid:{
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
Score.sync();
module.exports = Score;