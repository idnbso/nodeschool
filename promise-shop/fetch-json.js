const HTTP = require("q-io/http");
const url = 'http://localhost:1337';

HTTP.read(url)
    .then(content => {
        const json = JSON.parse(content);
        console.log(json);
    })
    .catch(console.log);