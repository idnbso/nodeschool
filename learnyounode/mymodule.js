'use strict'

const fs = require('fs');
const path = require('path')
const util = require('util');

const getDirectoryFilesByExtension = async (directoryFullPath, fileExtension, callback) => {
    try {
        const readdir = util.promisify(fs.readdir);
        const filesNames = await readdir(directoryFullPath);
        const extension = `.${fileExtension}`;
        const validFiles = [];
        for (let fileName of filesNames) {
            if (path.extname(fileName) === extension) {
                    validFiles.push(fileName);
                }
        }

        callback(null, validFiles);
    }
    catch (err) {
        callback(err);
    }
};

module.exports = getDirectoryFilesByExtension;