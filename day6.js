/**
 * Handles GET requests to "/greet" endpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function greetHandler(req, res) {
    const name = req.query.name;

    if (name) {
        res.send(`Hello, ${name}!`);
    } else {
        res.send('Hello, Guest!');
    }
}

// Test Cases:
// Simulating Express request and response objects for testing
const req1 = { query: { name: 'John' } };
const res1 = { send: (message) => console.log(message) };
greetHandler(req1, res1); // Expected Output: "Hello, John!"

const req2 = { query: {} };
const res2 = { send: (message) => console.log(message) };
greetHandler(req2, res2); // Expected Output: "Hello, Guest!"
