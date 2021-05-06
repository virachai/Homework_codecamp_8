const fs = require('fs');

module.exports =  myReadFile = (filename, callback) => {
    if(callback) console.log('callback');
    
    return new Promise ( (resolve, reject) => {
        fs.readFile(filename, 'utf8', function(err, dataDemo1) {
            if (err)
                reject(err);
            else
                resolve(dataDemo1);
        });
    });
}