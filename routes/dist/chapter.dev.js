"use strict";

var express = require('express');

var router = express.Router();

var Chapter = require("../model/chapter.model");

var _require = require("uuid"),
    uuidv4 = _require.v4; // รับค่า


router.get('/', function _callee(req, res) {
  var chapter;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Chapter.findAll());

        case 3:
          chapter = _context.sent;
          res.status(200).json({
            message: " Success",
            chapter: chapter
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

router.get('/findchapter/:SubjectID', function _callee2(req, res) {
  var SubjectID, chapter;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          SubjectID = req.params.SubjectID;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Chapter.findAll({
            where: {
              SubjectID: SubjectID
            }
          }));

        case 4:
          chapter = _context2.sent;
          res.status(200).json({
            message: " Success",
            chapter: chapter
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

router.get('/findchapterSemester/:SemesterID', function _callee3(req, res) {
  var SemesterID, chapter;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          SemesterID = req.params.SemesterID;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Chapter.findAll({
            where: {
              SemesterID: SemesterID
            }
          }));

        case 4:
          chapter = _context3.sent;
          res.status(200).json({
            message: " Success",
            chapter: chapter
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
  var _req$body, Chapter_name, Status, uid, SubjectID, SemesterID, chapter;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          try {
            _req$body = req.body, Chapter_name = _req$body.Chapter_name, Status = _req$body.Status, uid = _req$body.uid, SubjectID = _req$body.SubjectID, SemesterID = _req$body.SemesterID;
            chapter = Chapter.build({
              ChapterID: uuidv4(),
              Chapter_name: Chapter_name,
              Status: Status,
              uid: uid,
              SubjectID: SubjectID,
              SemesterID: SemesterID
            });
            chapter.save();
            res.status(200).json({
              message: "create Success",
              data: chapter
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
  var _req$body2, ChapterID, Chapter_name, Status, uid, SubjectID, SemesterID, chapter;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$body2 = req.body, ChapterID = _req$body2.ChapterID, Chapter_name = _req$body2.Chapter_name, Status = _req$body2.Status, uid = _req$body2.uid, SubjectID = _req$body2.SubjectID, SemesterID = _req$body2.SemesterID;
          _context5.next = 4;
          return regeneratorRuntime.awrap(Chapter.findOne({
            where: {
              ChapterID: ChapterID
            }
          }));

        case 4:
          chapter = _context5.sent;
          chapter.update({
            Chapter_name: Chapter_name,
            Status: Status,
            uid: uid,
            SubjectID: SubjectID,
            SemesterID: SemesterID
          });
          res.status(200).json({
            message: "update Success",
            chapter: chapter
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
});
router.put('/updateStatus/:ChapterID', function _callee6(req, res) {
  var ChapterID, Status, chapter;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          ChapterID = req.params.ChapterID;
          Status = req.body.Status;
          _context6.next = 5;
          return regeneratorRuntime.awrap(Chapter.findOne({
            where: {
              ChapterID: ChapterID
            }
          }));

        case 5:
          chapter = _context6.sent;
          chapter.update({
            Status: Status
          });
          res.status(200).json({
            message: "update Success",
            chapter: chapter
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
}); // delete

router["delete"]('/delete/:ChapterID', function _callee7(req, res) {
  var ChapterID, chapter;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          ChapterID = req.params.ChapterID;
          _context7.next = 4;
          return regeneratorRuntime.awrap(Chapter.findOne({
            where: {
              ChapterID: ChapterID
            }
          }));

        case 4:
          chapter = _context7.sent;
          _context7.next = 7;
          return regeneratorRuntime.awrap(chapter.destroy());

        case 7:
          res.status(200).json({
            message: " Success",
            chapter: chapter
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
});
module.exports = router;