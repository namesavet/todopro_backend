const express = require('express');
const router = express.Router();
const Score = require("../model/score.model");
const { v4: uuidv4 } = require("uuid")

// รับค่า
router.get('/', async (req, res,) => {

    try {

        const score = await Score.findAll();

        res.status(200).json({
            message: " Success",
            score,
        });
    } catch (error) {
        res.status(504).send(error);
    }

});
// รับค่า
router.get('/:SubjectID', async (req, res,) => {

    try {
        const { SubjectID } = req.params;

        const score = await Score.findAll({
            where: {
                SubjectID,
            }
        });

        res.status(200).json({
            message: " Success",
            score,
        });
    } catch (error) {
        res.status(504).send(error);
    }

});

router.get('/fineSemester/:SemesterID', async (req, res,) => {

    try {
        const { SemesterID } = req.params;

        const score = await Score.findAll({
            where: {
                SemesterID,
            }
        });

        res.status(200).json({
            message: " Success",
            score,
        });
    } catch (error) {
        res.status(504).send(error);
    }

});

// create
router.post('/create', async (req, res,) => {
    try {
        const {
            Score_title,
            Get_point,
            Full_point,
            SubjectID,
            StudentID,
            SemesterID, } = req.body;

        const score = Score.build({

         
            ScoreID: uuidv4(),
            Score_title,
            Get_point,
            Full_point,
            SubjectID,
            StudentID,
            SemesterID,
        });

        score.save();
        res.status(200).json({
            message: "create Success",
            data: score,
        });
    } catch (error) {
        res.status(504).send(error);
    }

});
// update
router.put('/update', async (req, res,) => {

    try {

        const {
            ScoreID,
            Score_title,
            Get_point,
            Full_point,
            SubjectID,
            StudentID,
            SemesterID,
        } = req.body;

        const score = await Score.findOne({
            where: {
                ScoreID,
            }
        });

        score.update({
            ScoreID: uuidv4(),
            Score_title,
            Get_point,
            Full_point,
            SubjectID,
            StudentID,
            SemesterID,
        })

        res.status(200).json({
            message: "update Success",
            score,
        });
    } catch (error) {
        res.status(504).send(error);
    }

});
// delete
router.delete('/delete/:ScoreID', async (req, res,) => {


    try {

        const { ScoreID } = req.params;

        const score = await Score.findOne({
            where: {
                ScoreID,
            }
        });

        await score.destroy();

        res.status(200).json({
            message: " Success",
            score,
        });
    } catch (error) {
        res.status(504).send(error);
    }

});

module.exports = router;
