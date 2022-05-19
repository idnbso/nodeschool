const http = require('http');
const through2map = require('through2-map')

const requestListener = (req, res) => {
    if (req.method !== 'POST') {
        return res.end('send me a POST\n');
    }

    req.pipe(through2map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res)
}

const server = http.createServer(requestListener);
const portNumber = process.argv[2];
server.listen(portNumber);