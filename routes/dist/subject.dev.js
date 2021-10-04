"use strict";

var express = require('express');

var router = express.Router();

var Subject = require("../model/subject.model");

var _require = require("uuid"),
    uuidv4 = _require.v4; // รับค่า


router.get('/', function _callee(req, res) {
  var subject;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Subject.findAll());

        case 3:
          subject = _context.sent;
          res.status(200).json({
            message: " Success",
            subject: subject
          });
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(504).send(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // รับค่า

router.get('/:SemesterID', function _callee2(req, res) {
  var SemesterID, subject;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          SemesterID = req.params.SemesterID;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Subject.findAll({
            where: {
              SemesterID: SemesterID
            }
          }));

        case 4:
          subject = _context2.sent;
          res.status(200).json({
            message: " Success",
            subject: subject
          });
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.status(504).send(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); // รับค่า

router.get('/findsubject/:SubjectID', function _callee3(req, res) {
  var SubjectID, subject;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          SubjectID = req.params.SubjectID;
          console.log(SubjectID);
          _context3.next = 5;
          return regeneratorRuntime.awrap(Subject.findAll({
            where: {
              SubjectID: SubjectID
            }
          }));

        case 5:
          subject = _context3.sent;
          res.status(200).json({
            message: " Success",
            subject: subject
          });
          _context3.next = 12;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          res.status(504).send(_context3.t0);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 9]]);
}); // create

router.post('/create', function _callee4(req, res) {
  var _req$body, Subject_name, Intal_name, Teacher_name, IDsubject, Credit, GradeA, GradeBplus, GradeB, GradeCplus, GradeC, GradeDplus, GradeD, Date_midterm_exam, Date_final_exam, Score_midterm, Score_final, Desired_grade, StudentID, SemesterID, subject;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          try {
            _req$body = req.body, Subject_name = _req$body.Subject_name, Intal_name = _req$body.Intal_name, Teacher_name = _req$body.Teacher_name, IDsubject = _req$body.IDsubject, Credit = _req$body.Credit, GradeA = _req$body.GradeA, GradeBplus = _req$body.GradeBplus, GradeB = _req$body.GradeB, GradeCplus = _req$body.GradeCplus, GradeC = _req$body.GradeC, GradeDplus = _req$body.GradeDplus, GradeD = _req$body.GradeD, Date_midterm_exam = _req$body.Date_midterm_exam, Date_final_exam = _req$body.Date_final_exam, Score_midterm = _req$body.Score_midterm, Score_final = _req$body.Score_final, Desired_grade = _req$body.Desired_grade, StudentID = _req$body.StudentID, SemesterID = _req$body.SemesterID;
            subject = Subject.build({
              SubjectID: uuidv4(),
              Subject_name: Subject_name,
              Intal_name: Intal_name,
              Teacher_name: Teacher_name,
              IDsubject: IDsubject,
              Credit: Credit,
              GradeA: GradeA,
              GradeBplus: GradeBplus,
              GradeB: GradeB,
              GradeCplus: GradeCplus,
              GradeC: GradeC,
              GradeDplus: GradeDplus,
              GradeD: GradeD,
              Date_midterm_exam: Date_midterm_exam,
              Date_final_exam: Date_final_exam,
              Score_midterm: Score_midterm,
              Score_final: Score_final,
              Desired_grade: Desired_grade,
              StudentID: StudentID,
              SemesterID: SemesterID
            });
            subject.save();
            res.status(200).json({
              message: "create Success",
              data: subject
            });
          } catch (error) {
            res.status(504).send(error);
          }

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
}); // update

router.put('/update', function _callee5(req, res) {
  var _req$body2, SubjectID, Subject_name, Intal_name, Teacher_name, IDsubject, Credit, GradeA, GradeBplus, GradeB, GradeCplus, GradeC, GradeDplus, GradeD, Date_midterm_exam, Date_final_exam, Score_midterm, Score_final, Desired_grade, StudentID, SemesterID, subject;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$body2 = req.body, SubjectID = _req$body2.SubjectID, Subject_name = _req$body2.Subject_name, Intal_name = _req$body2.Intal_name, Teacher_name = _req$body2.Teacher_name, IDsubject = _req$body2.IDsubject, Credit = _req$body2.Credit, GradeA = _req$body2.GradeA, GradeBplus = _req$body2.GradeBplus, GradeB = _req$body2.GradeB, GradeCplus = _req$body2.GradeCplus, GradeC = _req$body2.GradeC, GradeDplus = _req$body2.GradeDplus, GradeD = _req$body2.GradeD, Date_midterm_exam = _req$body2.Date_midterm_exam, Date_final_exam = _req$body2.Date_final_exam, Score_midterm = _req$body2.Score_midterm, Score_final = _req$body2.Score_final, Desired_grade = _req$body2.Desired_grade, StudentID = _req$body2.StudentID, SemesterID = _req$body2.SemesterID;
          _context5.next = 4;
          return regeneratorRuntime.awrap(Subject.findOne({
            where: {
              SubjectID: SubjectID
            }
          }));

        case 4:
          subject = _context5.sent;
          subject.update({
            Subject_name: Subject_name,
            Intal_name: Intal_name,
            Teacher_name: Teacher_name,
            IDsubject: IDsubject,
            Credit: Credit,
            GradeA: GradeA,
            GradeBplus: GradeBplus,
            GradeB: GradeB,
            GradeCplus: GradeCplus,
            GradeC: GradeC,
            GradeDplus: GradeDplus,
            GradeD: GradeD,
            Date_midterm_exam: Date_midterm_exam,
            Date_final_exam: Date_final_exam,
            Score_midterm: Score_midterm,
            Score_final: Score_final,
            Desired_grade: Desired_grade,
            StudentID: StudentID,
            SemesterID: SemesterID
          });
          res.status(200).json({
            message: "update Success",
            subject: subject
          });
          _context5.next = 12;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          res.status(504).send(_context5.t0);

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 9]]);
}); // delete

router["delete"]('/:SubjectID', function _callee6(req, res) {
  var SubjectID, subject;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          SubjectID = req.params.SubjectID;
          _context6.next = 4;
          return regeneratorRuntime.awrap(Subject.findOne({
            where: {
              SubjectID: SubjectID
            }
          }));

        case 4:
          subject = _context6.sent;
          _context6.next = 7;
          return regeneratorRuntime.awrap(subject.destroy());

        case 7:
          res.status(200).json({
            message: " Success",
            subject: subject
          });
          _context6.next = 13;
          break;

        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          res.status(504).send(_context6.t0);

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
module.exports = router;