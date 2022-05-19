'use strict'

const fs = require('fs');

const fileFullPath = process.argv[2];
const fileBuffer = fs.readFileSync(fileFullPath);
const lines = fileBuffer.toString().split('\n');
console.log(lines.length - 1);