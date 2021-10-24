"use strict";

var express = require('express');

var router = express.Router();

var Score = require("../model/score.model");

var _require = require("uuid"),
    uuidv4 = _require.v4; // รับค่า


router.get('/', function _callee(req, res) {
  var score;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Score.findAll());

        case 3:
          score = _context.sent;
          res.status(200).json({
            message: " Success",
            score: score
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

router.get('/:SubjectID', function _callee2(req, res) {
  var SubjectID, score;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          SubjectID = req.params.SubjectID;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Score.findAll({
            where: {
              SubjectID: SubjectID
            }
          }));

        case 4:
          score = _context2.sent;
          res.status(200).json({
            message: " Success",
            score: score
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
});
router.get('/fineSemester/:SemesterID', function _callee3(req, res) {
  var SemesterID, score;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          SemesterID = req.params.SemesterID;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Score.findAll({
            where: {
              SemesterID: SemesterID
            }
          }));

        case 4:
          score = _context3.sent;
          res.status(200).json({
            message: " Success",
            score: score
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
  var _req$body, Score_title, Get_point, Full_point, SubjectID, StudentID, SemesterID, score;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          try {
            _req$body = req.body, Score_title = _req$body.Score_title, Get_point = _req$body.Get_point, Full_point = _req$body.Full_point, SubjectID = _req$body.SubjectID, StudentID = _req$body.StudentID, SemesterID = _req$body.SemesterID;
            score = Score.build({
              ScoreID: uuidv4(),
              Score_title: Score_title,
              Get_point: Get_point,
              Full_point: Full_point,
              SubjectID: SubjectID,
              StudentID: StudentID,
              SemesterID: SemesterID
            });
            score.save();
            res.status(200).json({
              message: "create Success",
              data: score
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
  var _req$body2, ScoreID, Score_title, Get_point, Full_point, SubjectID, StudentID, SemesterID, score;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$body2 = req.body, ScoreID = _req$body2.ScoreID, Score_title = _req$body2.Score_title, Get_point = _req$body2.Get_point, Full_point = _req$body2.Full_point, SubjectID = _req$body2.SubjectID, StudentID = _req$body2.StudentID, SemesterID = _req$body2.SemesterID;
          _context5.next = 4;
          return regeneratorRuntime.awrap(Score.findOne({
            where: {
              ScoreID: ScoreID
            }
          }));

        case 4:
          score = _context5.sent;
          score.update({
            ScoreID: uuidv4(),
            Score_title: Score_title,
            Get_point: Get_point,
            Full_point: Full_point,
            SubjectID: SubjectID,
            StudentID: StudentID,
            SemesterID: SemesterID
          });
          res.status(200).json({
            message: "update Success",
            score: score
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

router["delete"]('/delete/:ScoreID', function _callee6(req, res) {
  var ScoreID, score;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          ScoreID = req.params.ScoreID;
          _context6.next = 4;
          return regeneratorRuntime.awrap(Score.findOne({
            where: {
              ScoreID: ScoreID
            }
          }));

        case 4:
          score = _context6.sent;
          _context6.next = 7;
          return regeneratorRuntime.awrap(score.destroy());

        case 7:
          res.status(200).json({
            message: " Success",
            score: score
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