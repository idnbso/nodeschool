const getDirectoryFilesByExtension = require('./mymodule');
const util = require('util');

const directoryFullPath = process.argv[2];
const fileExtension = process.argv[3];

async function printDirectoryFilesByExtension(directoryFullPath, fileExtension) {
    const getFiles = util.promisify(getDirectoryFilesByExtension);
    
    const files = await getFiles(directoryFullPath, fileExtension);
    files.forEach(file => console.log(file));
}

printDirectoryFilesByExtension(directoryFullPath, fileExtension);