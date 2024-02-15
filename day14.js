const express = require('express');
const cache = require('memory-cache');

const app = express();

const CACHE_EXPIRATION_TIME = 60 * 60 * 1000; // 1 hour

function cachingMiddleware(req, res, next) {
    const key = req.originalUrl; // Use the request URL as the cache key

    // Check if the response is cached
    const cachedResponse = cache.get(key);
    if (cachedResponse) {
        console.log('Returning cached response');
        return res.send(cachedResponse); // Return cached response
    }

    res.sendResponse = res.send;
    res.send = (body) => {
        cache.put(key, body, CACHE_EXPIRATION_TIME); // Cache the response
        res.sendResponse(body); // Send the response to the client
    };

}

app.use(cachingMiddleware);

app.get('/', (req, res) => {
    res.send('This is a sample response.');
});

// Start the Express server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
