'use strict';

const parsePromised = () => new Promise((resolve, reject) => {
    try {
        resolve(JSON.parse(process.argv[2]));
    }
    catch (error) {
        reject(error);
    }
});

parsePromised()
    .then(console.log)
    .catch(error => console.log(error.message));
