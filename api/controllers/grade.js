const mongoose = require('mongoose');
const Worksheet = require('../models/worksheet');
const Grader = require('../helpers/grader');

exports.gradeWorksheet = (req, res, next) => {
    if(!req.body.questions){ throw new Error('Property questions missing.'); }
    const questions = [];
    const grader = new Grader();
    let correct = 0;
    let total = 0;
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
        const grade = grader.grade(question.studentResponse, correctAnswer);
        questions.push({
            inputTemperature: question.inputTemperature,
            inputUnits: question.inputUnits,
            targetUnits: question.targetUnits,
            studentResponse: question.studentResponse,
            correctAnswer: correctAnswer.toString(),
            grade: grade
        });
        if(grade === 'Correct'){
            correct++;
        }
        total++;
    });
    const worksheet = new Worksheet({
        _id: new mongoose.Types.ObjectId(),
        studentName: req.body.studentName,
        worksheetName: req.body.worksheetName,
        worksheetGrade: correct/total * 100,
        date: new Date(),
        questions: questions
    });
    worksheet
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Worksheet collected, graded, and stored.',
                createdWorksheet: worksheet
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};