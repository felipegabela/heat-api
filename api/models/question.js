const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    inputTemperature: String,
    inputUnits: String,
    targetUnits: String,
    studentResponse: String, 
    correctAnswer: String,
    grade: String
});

module.exports =  questionSchema;