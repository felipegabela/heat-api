const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Worksheet = require('../models/worksheet');

/** Handles incoming GET requests to /reporting/<worksheetName>/<studentName> */
router.get('/:worksheetName/:studentName', (req, res, next) => {
    const worksheetName = req.params.worksheetName.replace("-", " ");
    const studentName = req.params.studentName.replace("-", " ");
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
});

/** Handles incoming GET requests to /reporting/<studentName> */
router.get('/:studentName', (req, res, next) => {
    const studentName = req.params.studentName.replace("-", " ");
    Worksheet.find({studentName: studentName})
        .exec()
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

module.exports = router;