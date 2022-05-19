'use strict'

const net = require('net');
const strftime = require('strftime')

const server = net.createServer((socket) => {
    const time = strftime("%F %H:%M", new Date());
    socket.end(`${time}\n`);
});

const portNumber = process.argv[2];
server.listen(portNumber);