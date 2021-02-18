const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    inputTemperature: { type: String, required: true},
    inputUnits: { type: String, required: true},
    targetUnits: { type: String, required: true},
    studentResponse: { type: String, required: true}, 
    correctAnswer: { type: Number, required: true},
    grade: { type: String, required: true}
});

module.exports =  questionSchema;