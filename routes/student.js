const express = require('express');
const router = express.Router();
const Student = require("../model/student.model");
const { v4: uuidv4 } = require("uuid")

// รับค่า
router.get('/', async (req, res,) => {

  try {

    const student = await Student.findAll();

    res.status(200).json({
      message: "create Success",
      student,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});
// รับค่า
router.get('/:StudentID', async (req, res,) => {

  try {
    const { StudentID } = req.params;

    const student = await Student.findOne({
      where: {
        StudentID,
      }
    });

    res.status(200).json({
      message: "create Success",
      student,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});
// create
router.post('/create', async (req, res,) => {
  try {
    const { StudentID, Fullname, Name, Major, Faculty, University, Email, Username, Phone } = req.body;

    const student = Student.build({
      StudentID,
      Fullname,
      Name,
      Major,
      Faculty,
      University,
      Email,
      Username,
      Phone
    });

    student.save();
    res.status(200).json({
      message: "create Success",
      data: student,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});
// update
router.put('/update', async (req, res,) => {

  try {

    const { StudentID, Fullname, Name, Major, Faculty, University, Email, Username, Phone } = req.body;

    const student = await Student.findOne({
      where: {
        StudentID,
      }
    });

    student.update({
      StudentID,
      Fullname,
      Name,
      Major,
      Faculty,
      University,
      Email,
      Username,
      Phone
    })

    res.status(200).json({
      message: "create Success",
      student,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});
// delete
router.delete('/', async (req, res,) => { });

module.exports = router;
