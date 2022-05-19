'use strict'

const fs = require('fs');
const path = require('path')
const util = require('util');

const directoryFullPath = process.argv[2];
const fileExtension = process.argv[3];

const printDirectoryFilesByExtension = async (directoryFullPath, fileExtension) => {
    try {
        const readdir = util.promisify(fs.readdir);
        const filesNames = await readdir(directoryFullPath);
        const extension = `.${fileExtension}`;
        for (let fileName of filesNames) {
            if (path.extname(fileName) === extension) {
                    console.log(fileName);
                }
        }
    }
    catch (err) {
        console.error(err);
    }
};

printDirectoryFilesByExtension(directoryFullPath, fileExtension)