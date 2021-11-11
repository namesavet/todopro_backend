const express = require('express');
const router = express.Router();
const Semester = require("../model/semester.model");
const { v4: uuidv4 } = require("uuid")

// รับค่า
router.get('/', async (req, res,) => {

    try {

        const semester = await Semester.findAll();

        res.status(200).json({
            message: " Success",
            semester,
        });
    } catch (error) {
        res.status(504).send(error);
    }

});
// รับค่า
router.get('/:uid', async (req, res,) => {

    try {
        const { uid } = req.params;

        const semester = await Semester.findAll({
            where: {
                uid,
            }
        });

        res.status(200).json({
            message: " Success",
            semester,
        });
    } catch (error) {
        res.status(504).send(error);
    }

});

// create
router.post('/create', async (req, res,) => {
    try {
        const {
            Semester_name,
            uid, } = req.body;

        const semester = Semester.build({
            SemesterID: uuidv4(),
            Semester_name,
            uid,
        });

        semester.save();
        res.status(200).json({
            message: "create Success",
            data: semester,
        });
    } catch (error) {
        res.status(504).send(error);
    }

});
// update
router.put('/update', async (req, res,) => {

    try {

        const {
            SemesterID,
            Semester_name,
            StudentID, } = req.body;

        const semester = await Semester.findOne({
            where: {
                SemesterID,
            }
        });

        semester.update({
            SemesterID,
            Semester_name,
            StudentID,
        })

        res.status(200).json({
            message: "update Success",
            semester,
        });
    } catch (error) {
        res.status(504).send(error);
    }

});
// delete
router.delete('/delete/:SemesterID', async (req, res,) => {


    try {

        const { SemesterID } = req.params;

        const semester = await Semester.findOne({
            where: {
                SemesterID,
            }
        });

        await semester.destroy();

        res.status(200).json({
            message: " Success",
            semester,
        });
    } catch (error) {
        res.status(504).send(error);
    }

});

module.exports = router;
