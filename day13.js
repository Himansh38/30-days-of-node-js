const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

function setupWebSocket(server) {
    wss.on('connection', (ws) => {
        console.log('Client connected');

        ws.on('message', (message) => {
            console.log(`Received message from client: ${message}`);
            // Echo back the message to the client
            ws.send(message);
        });

        // Handle WebSocket close event
        ws.on('close', () => {
            console.log('Client disconnected');
        });
    });
}

// Setup WebSocket server
setupWebSocket(server);

// Endpoint to serve HTML page for WebSocket connection
app.get('/websocket', (req, res) => {
    res.sendFile(path.join(__dirname, 'websocket.html'));
});

// Start the Express server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
