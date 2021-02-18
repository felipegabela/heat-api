const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

const gradingRoutes = require('./api/routes/grade');
const reportingRoutes = require('./api/routes/reports');

mongoose.connect(process.env.MONGO_ATLAS_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

/** Logs incoming requests. */
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

/** API Routes.  */
app.use('/grade', gradingRoutes);
app.use('/reports', reportingRoutes);

/** Error handling.  */
app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

module.exports = app;