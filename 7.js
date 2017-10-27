//starts off requiring the htp module
var http = require('http'),
// 2 arguments for the commandline
    url = process.argv[2];
// gets the url and based on the resonde either sets the encoding or logs an error
http.get(url, function (res) {
    res.setEncoding('utf8');
// error logging in case this fails
    res.on('error', function (error) {
        console.error(error);
    });
//if the data is found it logs it into the console
    res.on('data', function (data) {
        console.log(data);
    });

});
