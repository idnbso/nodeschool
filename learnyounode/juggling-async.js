const bl = require('bl');
const http = require('http');

const getStreamData = async (url) => {
    return new Promise((resolve, reject) => {
        try {
            http.get(url, response => {
                response.pipe(bl((err, responseStreamBytes) => {
                    if (err) {
                        console.error(err);
                        return;
                    }

                    const data = responseStreamBytes.toString();
                    resolve(data);
                }));

                response.on('error', reject);
            })
            .on('error', reject);
        } catch (err) {
            reject(err);
        }
    });
}

async function printUrlsStreams(urls) {
    const promises = urls.map(getStreamData);
    const results = await Promise.all(promises);
    results.forEach(result => console.log(result));
}

const urls = process.argv.slice(2, 5);
printUrlsStreams(urls);