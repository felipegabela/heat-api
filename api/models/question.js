const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    inputTemperature: String,
    inputUnits: String,
    targetUnits: String,
    studentResponse: String, 
    correctAnswer: Number,
    grade: String
});

module.exports =  questionSchema;