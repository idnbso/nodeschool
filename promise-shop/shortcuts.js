'use strict';

const promise = new Promise((resolve, reject) => {
    try {
        resolve('PROMISE VALUE');
    }
    catch (error) {
        reject(error);
    }
});

const onReject = (error) => console.log(error.message);

promise.then(console.log)
promise.catch(onReject)

Promise.resolve('SECRET VALUE').then(console.log);
Promise.reject(new Error('SECRET VALUE')).catch(onReject);
