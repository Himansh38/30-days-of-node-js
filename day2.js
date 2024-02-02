const fs = require('fs');

function writeToFile(filePath, content) {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.error(`Error writing to file: ${err.code}: ${err.path} does not exist.`);
            } else {
                console.error(`Error writing to file: ${err}`);
            }
        } else {
            console.log(`Data written to ${filePath}`);
        }
    });
}

// Test Cases:
writeToFile('test-files/output1.txt', 'Sample content.');
// writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
