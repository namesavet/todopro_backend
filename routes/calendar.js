const express = require('express');
const router = express.Router();
const Calendar = require("../model/calendar.model");
const { v4: uuidv4 } = require("uuid")

// รับค่า
router.get('/', async (req, res,) => {

  try {

    const calendar = await Calendar.findAll();

    res.status(200).json({
      message: " Success",
      calendar,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});
// รับค่า
router.get('/:SemesterID', async (req, res,) => {

  try {
    const { SemesterID } = req.params;

    const calendar = await Calendar.findAll({
      where: {
        SemesterID,
      }
    });

    res.status(200).json({
      message: " Success",
      calendar,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});



// รับค่า
router.get('/findnote/:NoteID', async (req, res,) => {

  try {
    const { NoteID } = req.params;
    console.log(NoteID);
    const calendar = await Calendar.findOne({
      where: {
        NoteID,
      }
    });

    res.status(200).json({
      message: " Success",
      calendar,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});


// create
router.post('/create', async (req, res,) => {
  try {
    const {
      Note_title,
      Note_type,
      Note_location,
      Note_date,
      Note_time,
      Note_detail,
      uid,
      SemesterID, } = req.body;

    const calendar = Calendar.build({
      NoteID: uuidv4(),
      Note_title,

      Note_type,
      Note_location,
      Note_date,
      Note_time,
      Note_detail,
      uid,
      SemesterID,
    });

    calendar.save();
    res.status(200).json({
      message: "create Success",
      data: calendar,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});
// update
router.put('/update/:NoteID', async (req, res,) => {

  try {
    const { NoteID }
      = req.params
    const {

      Note_title,
      Note_type,
      Note_location,
      Note_date,
      Note_time,
      Note_detail,

    } = req.body;

    const calendar = await Calendar.findOne({
      where: {
        NoteID,
      }
    });

    calendar.update({
      Note_title,
      Note_type,
      Note_location,
      Note_date,
      Note_time,
      Note_detail,
      
    })

    res.status(200).json({
      message: "update Success",
      calendar,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});
// delete
router.delete('/delete/:NoteID', async (req, res,) => {


  try {

    const { NoteID } = req.params;

    const calendar = await Calendar.findOne({
      where: {
        NoteID,
      }
    });

    await calendar.destroy();

    res.status(200).json({
      message: " Success",
      calendar,
    });
  } catch (error) {
    res.status(504).send(error);
  }

});

module.exports = router;
