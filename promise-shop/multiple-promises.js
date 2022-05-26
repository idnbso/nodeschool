'use strict';

const all = (firstPromise, secondPromise) => 
    new Promise((resolve, reject) => {
        let counter = 0;

        const firstValue = firstPromise.then((value) => {
            counter++
            return value;
        });
        const secondValue = secondPromise.then((value) => {
            counter++
            return value;
        });

        let values = [];
        firstValue
            .then(value => {
                values.push(value);
                return secondValue;
            })
            .then(value => {
                values.push(value);
                resolve(values);
            });
    });

    all(getPromise1(), getPromise2())
        .then(console.log)
        .catch(console.log);