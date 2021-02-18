const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Worksheet = require('../models/worksheet');
const Grader = require('../helpers/grader');

/** Handles incoming POST requests to /grading. */
router.post('/', (req, res, next) => {
    const questions = [];
    const grader = new Grader();
    req.body.questions.forEach(function (question) {
        // Throws error for invalid inputTemperature, inputUnits, targetUnits
        let correctAnswer;
        try {
            correctAnswer = grader.convertTemperature(
                question.inputTemperature,
                question.inputUnits,
                question.targetUnits
            );
        } catch(err) {
            throw new Error(err);
        }
        questions.push({
            inputTemperature: question.inputTemperature,
            inputUnits: question.inputUnits,
            targetUnits: question.targetUnits,
            studentResponse: question.studentResponse,
            correctAnswer: correctAnswer.toString(),
            grade: grader.grade(question.studentResponse, correctAnswer)
        });
    });
    const worksheet = new Worksheet({
        _id: new mongoose.Types.ObjectId(),
        studentName: req.body.studentName,
        worksheetName: req.body.worksheetName,
        worksheetGrade: 'Must be calculated',
        questions: questions
    });
    worksheet
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Worksheet collected, graded, and stored.',
                createdProduct: worksheet
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                worksheetStatus: 'Processing of worksheet failed.',
                error: err
            });
        });
});

module.exports = router;