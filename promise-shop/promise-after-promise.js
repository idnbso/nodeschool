'use strict';

const promise = new Promise((resolve, reject) => {
    try {
        const secondPromise = first().then(value => second(value));
        secondPromise.then(value => resolve(value));
    }
    catch (error) {
        reject(error);
    }
});

const onReject = (error) => console.log(error.message);

promise.then(console.log)
