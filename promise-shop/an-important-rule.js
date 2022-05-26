'use strict';

const alwaysThrows = () => { throw new Error('OH NOES') };

const iterate = (num) => num + 1;

Promise.resolve(iterate(0))
    .then(num => {
        let current = num;
        for (let i = 0; i < 10; i++) {
            console.log(current);
            
            if (current === 5) {
                alwaysThrows();
            }
            
            current = iterate(current);
        }
    })
    .catch(error => console.log(error.message));
