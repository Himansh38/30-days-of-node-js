const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// Define rate-limiting options
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);
 
app.get('/', (req, res) => {
    res.send('Welcome to the Express Rate Limiting Example!');
});
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
