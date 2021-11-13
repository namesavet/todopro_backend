"use strict";

var express = require('express');

var router = express.Router();

var Semester = require("../model/semester.model");

var _require = require("uuid"),
    uuidv4 = _require.v4; // รับค่า


router.get('/', function _callee(req, res) {
  var semester;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Semester.findAll());

        case 3:
          semester = _context.sent;
          res.status(200).json({
            message: " Success",
            semester: semester
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

router.get('/:uid', function _callee2(req, res) {
  var uid, semester;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          uid = req.params.uid;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Semester.findAll({
            where: {
              uid: uid
            }
          }));

        case 4:
          semester = _context2.sent;
          res.status(200).json({
            message: " Success",
            semester: semester
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

router.get('/getSemester/:uid', function _callee3(req, res) {
  var uid, semester;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          uid = req.params.uid;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Semester.findOne({
            where: {
              uid: uid
            }
          }));

        case 4:
          semester = _context3.sent;
          res.status(200).json({
            message: " Success",
            semester: semester
          });
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.status(504).send(_context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); // create

router.post('/create', function _callee4(req, res) {
  var _req$body, Semester_name, uid, semester;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          try {
            _req$body = req.body, Semester_name = _req$body.Semester_name, uid = _req$body.uid;
            semester = Semester.build({
              SemesterID: uuidv4(),
              Semester_name: Semester_name,
              uid: uid
            });
            semester.save();
            res.status(200).json({
              message: "create Success",
              data: semester
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
  var _req$body2, SemesterID, Semester_name, uid, semester;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$body2 = req.body, SemesterID = _req$body2.SemesterID, Semester_name = _req$body2.Semester_name, uid = _req$body2.uid;
          _context5.next = 4;
          return regeneratorRuntime.awrap(Semester.findOne({
            where: {
              SemesterID: SemesterID
            }
          }));

        case 4:
          semester = _context5.sent;
          semester.update({
            SemesterID: SemesterID,
            Semester_name: Semester_name,
            uid: uid
          });
          res.status(200).json({
            message: "update Success",
            semester: semester
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

router["delete"]('/delete/:SemesterID', function _callee6(req, res) {
  var SemesterID, semester;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          SemesterID = req.params.SemesterID;
          _context6.next = 4;
          return regeneratorRuntime.awrap(Semester.findOne({
            where: {
              SemesterID: SemesterID
            }
          }));

        case 4:
          semester = _context6.sent;
          _context6.next = 7;
          return regeneratorRuntime.awrap(semester.destroy());

        case 7:
          res.status(200).json({
            message: " Success",
            semester: semester
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