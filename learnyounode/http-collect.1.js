const http = require('http');


const printData = async (url) => {
    try {
        http.get(url, response => {
            response.setEncoding('utf8');
            const allData = [];
            let totalChars = 0;

            response.on('data', data => {
                allData.push(data);
                totalChars += data.length;
            });
            response.on('end', () => {
                console.log(totalChars);
                console.log(allData.join(''));
            });
            response.on('error', console.error);
        })
        .on('error', console.error);
    } catch (err) {
        console.log(err);
    }
}

const url = process.argv[2];
printData(url);