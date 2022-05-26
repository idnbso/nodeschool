'use strict';

const promise = new Promise((resolve, reject) => {
    resolve('PROMISE VALUE');
});

const onReject = (error) => console.log(error.message);

promise.then(console.log, onReject)
console.log('MAIN PROGRAM');
