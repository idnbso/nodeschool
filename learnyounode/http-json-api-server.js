const http = require('http');

const requestListener = (req, res) => {
    const url =  new URL(req.url, 'http://example.com');
    const timeAsIso = url.searchParams.get('iso');
    const date = new Date(timeAsIso);

    if (url.pathname === '/api/parsetime') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }));
    }

    if (url.pathname === '/api/unixtime') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify({
            unixtime: date.getTime()
        }));
    }

    res.writeHead(404);
    res.end();
}

const server = http.createServer(requestListener);
const portNumber = process.argv[2];
server.listen(portNumber);