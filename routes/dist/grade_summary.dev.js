"use strict";

var express = require('express');

var router = express.Router();

var Grade_sumary = require("../model/grade_summary.model");

var _require = require("uuid"),
    uuidv4 = _require.v4; // รับค่า


router.get('/', function _callee(req, res) {
  var grade_sumary;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Grade_sumary.findAll());

        case 3:
          grade_sumary = _context.sent;
          res.status(200).json({
            message: " Success",
            grade_sumary: grade_sumary
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

router.get('/:StudentID', function _callee2(req, res) {
  var StudentID, grade_sumary;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          StudentID = req.params.StudentID;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Grade_sumary.findAll({
            where: {
              StudentID: StudentID
            }
          }));

        case 4:
          grade_sumary = _context2.sent;
          res.status(200).json({
            message: " Success",
            grade_sumary: grade_sumary
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
}); // create

router.post('/create', function _callee3(req, res) {
  var _req$body, GPA, GPA_simulation, StudentID, SemesterID, grade_sumary;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          try {
            _req$body = req.body, GPA = _req$body.GPA, GPA_simulation = _req$body.GPA_simulation, StudentID = _req$body.StudentID, SemesterID = _req$body.SemesterID;
            grade_sumary = Grade_sumary.build({
              Grade_sumaryID: uuidv4(),
              GPA: GPA,
              GPA_simulation: GPA_simulation,
              StudentID: StudentID,
              SemesterID: SemesterID
            });
            grade_sumary.save();
            res.status(200).json({
              message: "create Success",
              data: grade_sumary
            });
          } catch (error) {
            res.status(504).send(error);
          }

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
}); // update

router.put('/update', function _callee4(req, res) {
  var _req$body2, Grade_sumaryID, Chapter_name, GPA, GPA_simulation, StudentID, SemesterID, grade_sumary;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body2 = req.body, Grade_sumaryID = _req$body2.Grade_sumaryID, Chapter_name = _req$body2.Chapter_name, GPA = _req$body2.GPA, GPA_simulation = _req$body2.GPA_simulation, StudentID = _req$body2.StudentID, SemesterID = _req$body2.SemesterID;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Grade_sumary.findOne({
            where: {
              Grade_sumaryID: Grade_sumaryID
            }
          }));

        case 4:
          grade_sumary = _context4.sent;
          grade_sumary.update({
            Chapter_name: Chapter_name,
            GPA: GPA,
            GPA_simulation: GPA_simulation,
            StudentID: StudentID,
            SemesterID: SemesterID
          });
          res.status(200).json({
            message: "update Success",
            grade_sumary: grade_sumary
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
}); // delete

router["delete"]('/:Grade_sumaryID', function _callee5(req, res) {
  var Grade_sumaryID, grade_sumary;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          Grade_sumaryID = req.params.Grade_sumaryID;
          _context5.next = 4;
          return regeneratorRuntime.awrap(Grade_sumary.findOne({
            where: {
              Grade_sumaryID: Grade_sumaryID
            }
          }));

        case 4:
          grade_sumary = _context5.sent;
          _context5.next = 7;
          return regeneratorRuntime.awrap(grade_sumary.destroy());

        case 7:
          res.status(200).json({
            message: " Success",
            grade_sumary: grade_sumary
          });
          _context5.next = 13;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          res.status(504).send(_context5.t0);

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
module.exports = router;