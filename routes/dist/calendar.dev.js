"use strict";

var express = require('express');

var router = express.Router();

var Calendar = require("../model/calendar.model");

var _require = require("uuid"),
    uuidv4 = _require.v4; // รับค่า


router.get('/', function _callee(req, res) {
  var calendar;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Calendar.findAll());

        case 3:
          calendar = _context.sent;
          res.status(200).json({
            message: " Success",
            calendar: calendar
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
  var SemesterID, calendar;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          SemesterID = req.params.SemesterID;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Calendar.findAll({
            where: {
              SemesterID: SemesterID
            }
          }));

        case 4:
          calendar = _context2.sent;
          res.status(200).json({
            message: " Success",
            calendar: calendar
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

router.get('/findnote/:NoteID', function _callee3(req, res) {
  var NoteID, calendar;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          NoteID = req.params.NoteID;
          console.log(NoteID);
          _context3.next = 5;
          return regeneratorRuntime.awrap(Calendar.findOne({
            where: {
              NoteID: NoteID
            }
          }));

        case 5:
          calendar = _context3.sent;
          res.status(200).json({
            message: " Success",
            calendar: calendar
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
  var _req$body, Note_title, Note_type, Note_location, Note_date, Note_time, Note_detail, StudentID, SemesterID, calendar;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          try {
            _req$body = req.body, Note_title = _req$body.Note_title, Note_type = _req$body.Note_type, Note_location = _req$body.Note_location, Note_date = _req$body.Note_date, Note_time = _req$body.Note_time, Note_detail = _req$body.Note_detail, StudentID = _req$body.StudentID, SemesterID = _req$body.SemesterID;
            calendar = Calendar.build({
              NoteID: uuidv4(),
              Note_title: Note_title,
              Note_type: Note_type,
              Note_location: Note_location,
              Note_date: Note_date,
              Note_time: Note_time,
              Note_detail: Note_detail,
              StudentID: StudentID,
              SemesterID: SemesterID
            });
            calendar.save();
            res.status(200).json({
              message: "create Success",
              data: calendar
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

router.put('/update/:NoteID', function _callee5(req, res) {
  var NoteID, _req$body2, Note_title, Note_type, Note_location, Note_date, Note_time, Note_detail, calendar;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          NoteID = req.params.NoteID;
          _req$body2 = req.body, Note_title = _req$body2.Note_title, Note_type = _req$body2.Note_type, Note_location = _req$body2.Note_location, Note_date = _req$body2.Note_date, Note_time = _req$body2.Note_time, Note_detail = _req$body2.Note_detail;
          _context5.next = 5;
          return regeneratorRuntime.awrap(Calendar.findOne({
            where: {
              NoteID: NoteID
            }
          }));

        case 5:
          calendar = _context5.sent;
          calendar.update({
            Note_title: Note_title,
            Note_type: Note_type,
            Note_location: Note_location,
            Note_date: Note_date,
            Note_time: Note_time,
            Note_detail: Note_detail
          });
          res.status(200).json({
            message: "update Success",
            calendar: calendar
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
}); // delete

router["delete"]('/delete/:NoteID', function _callee6(req, res) {
  var NoteID, calendar;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          NoteID = req.params.NoteID;
          _context6.next = 4;
          return regeneratorRuntime.awrap(Calendar.findOne({
            where: {
              NoteID: NoteID
            }
          }));

        case 4:
          calendar = _context6.sent;
          _context6.next = 7;
          return regeneratorRuntime.awrap(calendar.destroy());

        case 7:
          res.status(200).json({
            message: " Success",
            calendar: calendar
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