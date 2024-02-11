const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

/**
 * Authentication middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function authenticationMiddleware(req, res, next) {
    // Get the JWT from the request headers
    const token = req.headers.authorization;

    if (!token) {
        // No JWT present in the headers
        return res.status(401).json({ error: 'Unauthorized - No JWT provided' });
    }

    // Verify the JWT
    jwt.verify(token, 'your-secret-key', (err, decoded) => {
        if (err) {
            // Invalid JWT
            return res.status(401).json({ error: 'Unauthorized - Invalid JWT' });
        }

        // Valid JWT, proceed to the next middleware or route handler
        req.user = decoded; // Attach the decoded user information to the request object
        next();
    });
}

// Use the authentication middleware for protected routes
app.get('/protected', authenticationMiddleware, (req, res) => {
    res.json({ message: 'You have access to this protected resource.', user: req.user });
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});