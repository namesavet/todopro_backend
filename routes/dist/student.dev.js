"use strict";

var express = require('express');

var router = express.Router();

var Student = require("../model/student.model");

var _require = require("uuid"),
    uuidv4 = _require.v4; // รับค่า


router.get('/', function _callee(req, res) {
  var student;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Student.findAll());

        case 3:
          student = _context.sent;
          res.status(200).json({
            message: "Success",
            student: student
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
  var StudentID, student;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          StudentID = req.params.StudentID;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Student.findOne({
            where: {
              StudentID: StudentID
            }
          }));

        case 4:
          student = _context2.sent;
          res.status(200).json({
            message: " Success",
            student: student
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
  var _req$body, StudentID, Fullname, Name, Major, Faculty, University, Email, Username, Phone, student;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          try {
            _req$body = req.body, StudentID = _req$body.StudentID, Fullname = _req$body.Fullname, Name = _req$body.Name, Major = _req$body.Major, Faculty = _req$body.Faculty, University = _req$body.University, Email = _req$body.Email, Username = _req$body.Username, Phone = _req$body.Phone;
            student = Student.build({
              StudentID: StudentID,
              Fullname: Fullname,
              Name: Name,
              Major: Major,
              Faculty: Faculty,
              University: University,
              Email: Email,
              Username: Username,
              Phone: Phone
            });
            student.save();
            res.status(200).json({
              message: "create Success",
              data: student
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
  var _req$body2, StudentID, Fullname, Name, Major, Faculty, University, Email, Username, Phone, student;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body2 = req.body, StudentID = _req$body2.StudentID, Fullname = _req$body2.Fullname, Name = _req$body2.Name, Major = _req$body2.Major, Faculty = _req$body2.Faculty, University = _req$body2.University, Email = _req$body2.Email, Username = _req$body2.Username, Phone = _req$body2.Phone;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Student.findOne({
            where: {
              StudentID: StudentID
            }
          }));

        case 4:
          student = _context4.sent;
          student.update({
            StudentID: StudentID,
            Fullname: Fullname,
            Name: Name,
            Major: Major,
            Faculty: Faculty,
            University: University,
            Email: Email,
            Username: Username,
            Phone: Phone
          });
          res.status(200).json({
            message: "update Success",
            student: student
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

router["delete"]('/:StudentID', function _callee5(req, res) {
  var StudentID, student;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          StudentID = req.params.StudentID;
          _context5.next = 4;
          return regeneratorRuntime.awrap(Student.findOne({
            where: {
              StudentID: StudentID
            }
          }));

        case 4:
          student = _context5.sent;
          _context5.next = 7;
          return regeneratorRuntime.awrap(student.destroy());

        case 7:
          res.status(200).json({
            message: " Success",
            student: student
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