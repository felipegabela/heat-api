const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ReportsController = require('../controllers/reports');

/** Handles incoming GET requests 
 *  to /reports/:worksheetName/:studentName 
 */
router.get('/:worksheetName/:studentName',
    ReportsController.getStudentWorksheet);

/** Handles incoming GET requests to /reports/:studentName */
router.get('/:studentName',ReportsController.getAllStudentWorksheet );

module.exports = router;