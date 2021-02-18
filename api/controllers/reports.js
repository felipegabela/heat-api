const mongoose = require('mongoose');
const Worksheet = require('../models/worksheet');

/** Fetches a particular worksheet from a student. */
exports.getStudentWorksheet = (req, res, next) => {
    const searchRegExp = /-/g;
    const replaceWith = ' ';
    const worksheetName = req.params.worksheetName.replace(
        searchRegExp, replaceWith);

    const studentName = req.params.studentName.replace(
        searchRegExp, replaceWith);
        
    Worksheet.find({
        studentName: studentName,
        worksheetName: worksheetName
    })
        .exec()
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

/** Fetches all worksheets from a particular student. */
exports.getAllStudentWorksheet = (req, res, next) => {
    const searchRegExp = /-/g;
    const replaceWith = ' ';
    const studentName = req.params.studentName.replace(
        searchRegExp, replaceWith);
        
    Worksheet.find({ studentName: studentName })
        .exec()
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};