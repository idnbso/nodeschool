const http = require('http');
const fs = require('fs');

const requestListener = (req, res) => {
    const fileFullPath = process.argv[3];
    const readStream = fs.createReadStream(fileFullPath);

    readStream.on('open', () => {
        readStream.pipe(res);
    });

    readStream.on('error', err => res.end);
}

const server = http.createServer(requestListener);
const portNumber = process.argv[2];
server.listen(portNumber);