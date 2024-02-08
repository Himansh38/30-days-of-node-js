/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function positiveIntegerHandler(req, res, next) {
    const number = parseInt(req.query.number);
    if (Number.isInteger(number) && number > 0) {
        res.send('Success: Number is positive integer.');
    } else {
        const error = new Error('Number must be a positive integer.');
        error.status = 400;
        next(error);
    }
}

/**
 * Error handling middleware to handle specific errors
 * @param {Object} err - Error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function errorHandler(err, req, res, next) {
    res.status(err.status || 500).send({
        message: err.message || 'Internal Server Error'
    });
}

const express = require('express');
const app = express();

app.get('/positive', positiveIntegerHandler);

app.use(errorHandler);

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
