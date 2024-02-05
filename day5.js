const path = require('path')

function checkFileExtension(filePath, expectedExtension) {
    const fileExtension = path.extname(filePath)
    if (fileExtension === expectedExtension)
    {
        console.log(`file has the expected extension: ${expectedExtension}`);
    }
    else{
        console.log(`file has does not have the expected extension. Expected: ${expectedExtension}, Actual: ${fileExtension}`);

    }
}

//test Cases:
checkFileExtension('test-file/file1.txt', '.txt')
checkFileExtension('test-file/image.png', '.jpg')