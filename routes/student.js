const express = require('express');
const router = express.Router();
const Student = require("../model/student.model");
const { v4: uuidv4 } = require("uuid")

// รับค่า
router.get('/', async(req, res, )=> {});
// create
router.post('/', async(req, res, )=> {
try {

const student = Student.build({
  StudentID:6130613034,
Fullname:"Pongsavet",
Name:"name",
Major:"SE",
Faculty:"Coc",
University:"PSU",
Email:"Pongsavet_name@hotmail.com",
Username:"namesavet",
Phone:"0894716852",

});
student.save();

  res.status(200).json({
    message: "create Success",
    data:student,
  });
} catch (error) {
  res.status(504).send(error);
}

});
// update
router.put('/', async(req, res, )=> {});
// delete
router.delete('/', async(req, res, )=> {});

module.exports = router;
