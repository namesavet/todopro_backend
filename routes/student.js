const express = require('express');
const router = express.Router();
const Student = require("../model/student.model");
const { v4: uuidv4 } = require("uuid")

// รับค่า
router.get('/', async (req, res,) => {

  try {

    const student = await Student.findAll();

    res.status(200).json({
      message: "Success",
      student,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});
// รับค่า
// router.get('/:StudentID', async (req, res,) => {

//   try {
//     const { StudentID } = req.params;

//     const student = await Student.findOne({
//       where: {
//         StudentID,
//       }
//     });

//     res.status(200).json({
//       message: " Success",
//       student,
//     });
//   } catch (error) {
//     res.status(504).send(error);
//   }

// });

// รับค่า
router.get('/findStudentID/:uid', async (req, res,) => {

  try {
    const { uid } = req.params;

    const student = await Student.findOne({
      where: {
        uid,
      }
    });

    res.status(200).json({
      message: " Success",
      student,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});


// create
router.post('/create', async (req, res,) => {
  try {
    const { StudentID, Fullname, Name, Major, Faculty, University,uid } = req.body;

    const student = Student.build({
      StudentID,
      Fullname,
      Name,
      Major,
      Faculty,
      University,
      uid
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

    const { StudentID, Fullname, Name, Major, Faculty, University } = req.body;

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
      University
      
    })

    res.status(200).json({
      message: "update Success",
      student,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});
// delete
router.delete('/:StudentID', async (req, res,) => { 

  
  try {

    const { StudentID } = req.params;

    const student = await Student.findOne({
      where: {
        StudentID,
      }
    });

    await student.destroy();

    res.status(200).json({
      message: " Success",
      student,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});

module.exports = router;
