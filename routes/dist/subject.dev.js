"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var express = require('express');

var router = express.Router();

var Subject = require("../model/subject.model");

var Chapter = require("../model/chapter.model");

var Score = require("../model/score.model");

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
          return regeneratorRuntime.awrap(Subject.findOne({
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
});
router.get('/studentsubject/:uid/', function _callee4(req, res) {
  var uid, subject;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          uid = req.params.uid;
          console.log(uid);
          _context4.next = 5;
          return regeneratorRuntime.awrap(Subject.findAll({
            where: {
              uid: uid
            }
          }));

        case 5:
          subject = _context4.sent;
          res.status(200).json({
            message: " Success",
            subject: subject
          });
          _context4.next = 12;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          res.status(504).send(_context4.t0);

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 9]]);
}); // create

router.post('/create', function _callee5(req, res) {
  var _req$body, Subject_name, Intal_name, Teacher_name, IDsubject, Credit, GradeA, GradeBplus, GradeB, GradeCplus, GradeC, GradeDplus, GradeD, Date_midterm_exam, Date_final_exam, Score_midterm, Score_final, Desired_grade, uid, SemesterID, subject;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          try {
            _req$body = req.body, Subject_name = _req$body.Subject_name, Intal_name = _req$body.Intal_name, Teacher_name = _req$body.Teacher_name, IDsubject = _req$body.IDsubject, Credit = _req$body.Credit, GradeA = _req$body.GradeA, GradeBplus = _req$body.GradeBplus, GradeB = _req$body.GradeB, GradeCplus = _req$body.GradeCplus, GradeC = _req$body.GradeC, GradeDplus = _req$body.GradeDplus, GradeD = _req$body.GradeD, Date_midterm_exam = _req$body.Date_midterm_exam, Date_final_exam = _req$body.Date_final_exam, Score_midterm = _req$body.Score_midterm, Score_final = _req$body.Score_final, Desired_grade = _req$body.Desired_grade, uid = _req$body.uid, SemesterID = _req$body.SemesterID;
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
              uid: uid,
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
          return _context5.stop();
      }
    }
  });
});
router.post('/createWithId/:addSubjectID', function _callee6(req, res) {
  var addSubjectID, subject, chapter, _subject$dataValues, SubjectID, dataSubject, addSubject, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, iterator, _iterator$dataValues, ChapterID, _SubjectID, dataChapter, addChapter;

  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          addSubjectID = req.params.addSubjectID;
          _context6.next = 4;
          return regeneratorRuntime.awrap(Subject.findOne({
            where: {
              SubjectID: addSubjectID
            }
          }));

        case 4:
          subject = _context6.sent;
          _context6.next = 7;
          return regeneratorRuntime.awrap(Chapter.findAll({
            where: {
              SubjectID: addSubjectID
            }
          }));

        case 7:
          chapter = _context6.sent;
          _subject$dataValues = subject.dataValues, SubjectID = _subject$dataValues.SubjectID, dataSubject = _objectWithoutProperties(_subject$dataValues, ["SubjectID"]);
          addSubject = Subject.build(_objectSpread({
            SubjectID: uuidv4()
          }, dataSubject));
          addSubject.save();
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context6.prev = 14;

          for (_iterator = chapter[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            iterator = _step.value;
            // วนค่าทั้งหมดของchapter แล้วadd เข้าไปใหม่
            _iterator$dataValues = iterator.dataValues, ChapterID = _iterator$dataValues.ChapterID, _SubjectID = _iterator$dataValues.SubjectID, dataChapter = _objectWithoutProperties(_iterator$dataValues, ["ChapterID", "SubjectID"]);
            addChapter = Chapter.build(_objectSpread({
              ChapterID: uuidv4(),
              SubjectID: addSubject.SubjectID
            }, dataChapter));
            addChapter.save();
          }

          _context6.next = 22;
          break;

        case 18:
          _context6.prev = 18;
          _context6.t0 = _context6["catch"](14);
          _didIteratorError = true;
          _iteratorError = _context6.t0;

        case 22:
          _context6.prev = 22;
          _context6.prev = 23;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 25:
          _context6.prev = 25;

          if (!_didIteratorError) {
            _context6.next = 28;
            break;
          }

          throw _iteratorError;

        case 28:
          return _context6.finish(25);

        case 29:
          return _context6.finish(22);

        case 30:
          res.status(200).json({
            message: "create Success",
            data: subject
          });
          _context6.next = 36;
          break;

        case 33:
          _context6.prev = 33;
          _context6.t1 = _context6["catch"](0);
          res.status(504).send(_context6.t1);

        case 36:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 33], [14, 18, 22, 30], [23,, 25, 29]]);
}); // update

router.put('/update/:SubjectID', function _callee7(req, res) {
  var SubjectID, _req$body2, Subject_name, Intal_name, Teacher_name, IDsubject, Credit, GradeA, GradeBplus, GradeB, GradeCplus, GradeC, GradeDplus, GradeD, Date_midterm_exam, Date_final_exam, Score_midterm, Score_final, Desired_grade, subject;

  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          SubjectID = req.params.SubjectID;
          _req$body2 = req.body, Subject_name = _req$body2.Subject_name, Intal_name = _req$body2.Intal_name, Teacher_name = _req$body2.Teacher_name, IDsubject = _req$body2.IDsubject, Credit = _req$body2.Credit, GradeA = _req$body2.GradeA, GradeBplus = _req$body2.GradeBplus, GradeB = _req$body2.GradeB, GradeCplus = _req$body2.GradeCplus, GradeC = _req$body2.GradeC, GradeDplus = _req$body2.GradeDplus, GradeD = _req$body2.GradeD, Date_midterm_exam = _req$body2.Date_midterm_exam, Date_final_exam = _req$body2.Date_final_exam, Score_midterm = _req$body2.Score_midterm, Score_final = _req$body2.Score_final, Desired_grade = _req$body2.Desired_grade;
          _context7.next = 5;
          return regeneratorRuntime.awrap(Subject.findOne({
            where: {
              SubjectID: SubjectID
            }
          }));

        case 5:
          subject = _context7.sent;
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
            Desired_grade: Desired_grade
          });
          res.status(200).json({
            message: "update Success",
            subject: subject
          });
          _context7.next = 13;
          break;

        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          res.status(504).send(_context7.t0);

        case 13:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 10]]);
}); // delete

router["delete"]('/delete/:SubjectID', function _callee8(req, res) {
  var SubjectID, subject;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          SubjectID = req.params.SubjectID;
          _context8.next = 4;
          return regeneratorRuntime.awrap(Subject.findOne({
            where: {
              SubjectID: SubjectID
            }
          }));

        case 4:
          subject = _context8.sent;
          _context8.next = 7;
          return regeneratorRuntime.awrap(subject.destroy());

        case 7:
          _context8.next = 9;
          return regeneratorRuntime.awrap(Chapter.destroy({
            where: {
              SubjectID: SubjectID
            }
          }));

        case 9:
          _context8.next = 11;
          return regeneratorRuntime.awrap(Score.destroy({
            where: {
              SubjectID: SubjectID
            }
          }));

        case 11:
          res.status(200).json({
            message: " Success"
          });
          _context8.next = 18;
          break;

        case 14:
          _context8.prev = 14;
          _context8.t0 = _context8["catch"](0);
          console.log(_context8.t0.message);
          res.status(504).send(_context8.t0);

        case 18:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 14]]);
});
module.exports = router;