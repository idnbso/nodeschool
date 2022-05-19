'use strict'

const fs = require('fs');
const util = require('util');

const displayFileTotalLines = async (fileFullPath) => {
    try {
        const readFile = util.promisify(fs.readFile);
        const fileAsText = await readFile(fileFullPath, 'utf8');
        const lines = fileAsText.split('\n');
        console.log(lines.length - 1);
    }
    catch (err) {
        console.error(err);
    }
};

displayFileTotalLines(process.argv[2]);
