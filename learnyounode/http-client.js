const util = require('util');
const http = require('http');


const printData = async (url) => {
    try {
        http.get(url, response => {
            response.setEncoding('utf8');
            response.on('data', console.log);
            response.on('error', console.error);
        })
        .on('error', console.error);
    } catch (err) {
        console.log(err);
    }
}

const url = process.argv[2];
printData(url);