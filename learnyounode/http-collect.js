const bl = require('bl');
const http = require('http');


const printData = async (url) => {
    try {
        http.get(url, response => {
            response.pipe(bl((err, responseStreamBytes) => {
                if (err) {
                    console.error(err);
                    return;
                }

                const data = responseStreamBytes.toString();
                console.log(data.length);
                console.log(data);
            }));

            response.on('error', console.error);
        })
        .on('error', console.error);
    } catch (err) {
        console.log(err);
    }
}

const url = process.argv[2];
printData(url);