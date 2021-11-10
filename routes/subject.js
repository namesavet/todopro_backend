const express = require('express');
const router = express.Router();
const Subject = require("../model/subject.model");
const Chapter = require("../model/chapter.model");
const Score = require("../model/score.model");
const { v4: uuidv4 } = require("uuid")

// รับค่า
router.get('/', async (req, res,) => {

  try {

    const subject = await Subject.findAll();

    res.status(200).json({
      message: " Success",
      subject,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});
// รับค่า
router.get('/:SemesterID', async (req, res,) => {

  try {
    const { SemesterID } = req.params;

    const subject = await Subject.findAll({
      where: {
        SemesterID,
      }
    });

    res.status(200).json({
      message: " Success",
      subject,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});
// รับค่า
router.get('/findsubject/:SubjectID', async (req, res,) => {

  try {
    const { SubjectID } = req.params;
    console.log(SubjectID);
    const subject = await Subject.findOne({
      where: {
        SubjectID,
      }
    });

    res.status(200).json({
      message: " Success",
      subject,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});

router.get('/studentsubject/:StudentID', async (req, res,) => {

  try {
    const { StudentID } = req.params;
    console.log(StudentID);
    const subject = await Subject.findAll({
      where: {
        StudentID,
      }
    });

    res.status(200).json({
      message: " Success",
      subject,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});
// create
router.post('/create', async (req, res,) => {
  try {
    const {
      Subject_name,
      Intal_name,
      Teacher_name,
      IDsubject,
      Credit,
      GradeA,
      GradeBplus,
      GradeB,
      GradeCplus,
      GradeC,
      GradeDplus,
      GradeD,
      Date_midterm_exam,
      Date_final_exam,
      Score_midterm,
      Score_final,
      Desired_grade,
      StudentID,
      SemesterID,
    } = req.body;

    const subject = Subject.build({
      SubjectID: uuidv4(),
      Subject_name,
      Intal_name,
      Teacher_name,
      IDsubject,
      Credit,
      GradeA,
      GradeBplus,
      GradeB,
      GradeCplus,
      GradeC,
      GradeDplus,
      GradeD,
      Date_midterm_exam,
      Date_final_exam,
      Score_midterm,
      Score_final,
      Desired_grade,
      StudentID,
      SemesterID,

    });

    subject.save();
    res.status(200).json({
      message: "create Success",
      data: subject,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});
// update
router.put('/update/:SubjectID', async (req, res,) => {

  try {
    const { SubjectID } = req.params
    const {
      Subject_name,
      Intal_name,
      Teacher_name,
      IDsubject,
      Credit,
      GradeA,
      GradeBplus,
      GradeB,
      GradeCplus,
      GradeC,
      GradeDplus,
      GradeD,
      Date_midterm_exam,
      Date_final_exam,
      Score_midterm,
      Score_final,
      Desired_grade,

    } = req.body;

    const subject = await Subject.findOne({
      where: {
        SubjectID,
      }
    });

    subject.update({
      Subject_name,
      Intal_name,
      Teacher_name,
      IDsubject,
      Credit,
      GradeA,
      GradeBplus,
      GradeB,
      GradeCplus,
      GradeC,
      GradeDplus,
      GradeD,
      Date_midterm_exam,
      Date_final_exam,
      Score_midterm,
      Score_final,
      Desired_grade,

    })

    res.status(200).json({
      message: "update Success",
      subject,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});

// delete
router.delete('/delete/:SubjectID', async (req, res,) => {


  try {

    const { SubjectID } = req.params;

    const subject = await Subject.findOne({
      where: {
        SubjectID,
      }
    });
   
    await subject.destroy();
    
    await Chapter.destroy({
      where: {
        SubjectID
      },
    });
    await Score.destroy({
      where: {
        SubjectID
      },
    });

    res.status(200).json({
      message: " Success",
    });
  } catch (error) {
    console.log(error.message);
    res.status(504).send(error);

  }

});

module.exports = router;
