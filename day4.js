const { log } = require('console');
const path = require ('path');
 
function resolvePath(relativePath){
    const absolutePath = path.resolve(relativePath);
    console.log('Resolved Path:', absolutePath);

}
//Test Cases:
resolvePath('test-files/file.txt');
resolvePath('nonexistent-folder/file.txt');