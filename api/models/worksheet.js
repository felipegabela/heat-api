const mongoose = require('mongoose');
const questionSchema = require('../models/question');

const worksheetSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    studentName: { type: String, required: true},
    worksheetName: { type: String, required: true},
    worksheetGrade: { type: Number, required: true}, 
    date: { type: Date, required: true},
    questions: {type: [questionSchema], required: true}
});

module.exports = mongoose.model('Worksheet', worksheetSchema);