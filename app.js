var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



const sequelize = require("./database/database.config");

app.get("/",async(req,res) => {

    try {
        await sequelize.authenticate()
        res.status(200).send("Connect to Database Succes")
    } catch (error) {
        res.status(404).send("Can't Connect to Database")
    }

});

const StudentService = require("./routes/student");
app.use("/student", StudentService);

const SubjectService = require("./routes/subject");
app.use("/subject", SubjectService);

const ChapterService = require("./routes/chapter");
app.use("/chapter", ChapterService);

const SemesterService = require("./routes/semester");
app.use("/semester", SemesterService);

module.exports = app;
