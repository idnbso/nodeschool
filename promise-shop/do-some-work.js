const HTTP = require("q-io/http");

const fauxSessionCacheUrl = 'http://localhost:7000';
const fauxDatabaseUrl = 'http://localhost:7001';

HTTP.read({ url: fauxSessionCacheUrl, method: "GET" })
    .then(userId => HTTP.read({ url: `${fauxDatabaseUrl}/${userId}`, method: 'GET'}))
    .then(user => console.log(JSON.parse(user)))
    .catch(console.log);