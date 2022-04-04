const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {            
            //if error, reject Promise and send error to Promise's .catch() method
            if (err) {
                reject(err);
                return;
            }

            // if success, resolve Promise and send data to .then() method
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            //if error, reject Promise and send error to Promise's .catch() method
            if (err) {
                reject(err);
                return;
            }

            // if success, resolve Promise and send data to .then() method
            resolve({
                ok: true,
                message: 'Stylesheet Created!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };