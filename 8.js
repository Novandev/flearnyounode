// please remeber to import the bl class from npm
// requires http variable
var http = require('http');
// rewuires the bl variable
var bl = require('bl');
// the two command line arguments
var url = process.argv[2];
//gets the urls and pipes the data
http.get(url, function (res) {
    res.pipe(bl(function (err, data) {
      // assuming theres no error it converts the data to a string
       data = data.toString();
       // longs the lenth of words in the file
       console.log(data.length);
       // logs the  words in console
       console.log(data);
    }));
});
