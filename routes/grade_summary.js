const express = require('express');
const router = express.Router();
const Grade_sumary = require("../model/grade_summary.model");
const { v4: uuidv4 } = require("uuid")

// รับค่า
router.get('/', async (req, res,) => {

    try {

        const grade_sumary = await Grade_sumary.findAll();

        res.status(200).json({
            message: " Success",
            grade_sumary,
        });
    } catch (error) {
        res.status(504).send(error);
    }

});
// รับค่า
router.get('/:StudentID', async (req, res,) => {

    try {
        const { StudentID } = req.params;

        const grade_sumary = await Grade_sumary.findAll({
            where: {
                StudentID,
            }
        });

        res.status(200).json({
            message: " Success",
            grade_sumary,
        });
    } catch (error) {
        res.status(504).send(error);
    }

});

// create
router.post('/create', async (req, res,) => {
    try {
        const {
            GPA,
            GPA_simulation,
            StudentID,
            SemesterID,} = req.body;

        const grade_sumary = Grade_sumary.build({

            Grade_sumaryID: uuidv4(),
            GPA,
            GPA_simulation,
            StudentID,
            SemesterID,
        });

        grade_sumary.save();
        res.status(200).json({
            message: "create Success",
            data: grade_sumary,
        });
    } catch (error) {
        res.status(504).send(error);
    }

});
// update
router.put('/update', async (req, res,) => {

    try {

        const {
            Grade_sumaryID,
            Chapter_name,
            GPA,
            GPA_simulation,
            StudentID,
            SemesterID,
        } = req.body;

        const grade_sumary = await Grade_sumary.findOne({
            where: {
                Grade_sumaryID,
            }
        });

        grade_sumary.update({
            Chapter_name,
            GPA,
            GPA_simulation,
            StudentID,
            SemesterID,
        })

        res.status(200).json({
            message: "update Success",
            grade_sumary,
        });
    } catch (error) {
        res.status(504).send(error);
    }

});
// delete
router.delete('/:Grade_sumaryID', async (req, res,) => {


    try {

        const { Grade_sumaryID } = req.params;

        const grade_sumary = await Grade_sumary.findOne({
            where: {
                Grade_sumaryID,
            }
        });

        await grade_sumary.destroy();

        res.status(200).json({
            message: " Success",
            grade_sumary,
        });
    } catch (error) {
        res.status(504).send(error);
    }

});

module.exports = router;
