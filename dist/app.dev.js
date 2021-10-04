"use strict";

var express = require('express');

var path = require('path');

var cookieParser = require('cookie-parser');

var logger = require('morgan');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

var sequelize = require("./database/database.config");

app.get("/", function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(sequelize.authenticate());

        case 3:
          res.status(200).send("Connect to Database Succes");
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          res.status(404).send("Can't Connect to Database");

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
});

var StudentService = require("./routes/student");

app.use("/student", StudentService);

var SubjectService = require("./routes/subject");

app.use("/subject", SubjectService);

var ChapterService = require("./routes/chapter");

app.use("/chapter", ChapterService);

var SemesterService = require("./routes/semester");

app.use("/semester", SemesterService);

var CalendarService = require("./routes/calendar");

app.use("/calendar", CalendarService);

var ScoreService = require("./routes/score");

app.use("/score", ScoreService);

var Grade_sumaryService = require("./routes/grade_summary");

app.use("/grade_summary", Grade_sumaryService);
module.exports = app;