const mongoose = require('mongoose');
const questionSchema = require('../models/question');

const worksheetSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    studentName: String,
    worksheetName: String,
    worksheetGrade: String, 
    questions: [questionSchema]
});

module.exports = mongoose.model('Worksheet', worksheetSchema);