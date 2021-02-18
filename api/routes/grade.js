const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const GradeController = require ('../controllers/grade');

/** Handles incoming POST requests to /grade. */
router.post('/', GradeController.gradeWorksheet);

module.exports = router;