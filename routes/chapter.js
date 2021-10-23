const express = require('express');
const router = express.Router();
const Chapter = require("../model/chapter.model");
const { v4: uuidv4 } = require("uuid")

// รับค่า
router.get('/', async (req, res,) => {

  try {

    const chapter = await Chapter.findAll();

    res.status(200).json({
      message: " Success",
      chapter,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});
// รับค่า
router.get('/findchapter/:SubjectID', async (req, res,) => {

  try {
    const { SubjectID } = req.params;

    const chapter = await Chapter.findAll({
      where: {
        SubjectID,
      }
    });

    res.status(200).json({
      message: " Success",
      chapter,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});

// create
router.post('/create', async (req, res,) => {
  try {
    const {
        Chapter_name,
        Status,
        StudentID,
        SubjectID ,
        SemesterID} = req.body;

    const chapter = Chapter.build({
        ChapterID: uuidv4(),
        Chapter_name,
        Status,
        StudentID,
        SubjectID ,
        SemesterID
    });

    chapter.save();
    res.status(200).json({
      message: "create Success",
      data: chapter,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});
// update
router.put('/update', async (req, res,) => {

  try {

    const { 
        ChapterID,
        Chapter_name,
        Status,
        StudentID,
        SubjectID ,
        SemesterID
 } = req.body;

    const chapter = await Chapter.findOne({
      where: {
        ChapterID,
      }
    });

    chapter.update({
        Chapter_name,
        Status,
        StudentID,
        SubjectID ,
        SemesterID
    })

    res.status(200).json({
      message: "update Success",
      chapter,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});





// delete
router.delete('/delete/:ChapterID', async (req, res,) => { 

  
  try {

    const { ChapterID } = req.params;

    const chapter = await Chapter.findOne({
      where: {
        ChapterID,
      }
    });

    await chapter.destroy();

    res.status(200).json({
      message: " Success",
      chapter,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});
module.exports = router;
