
//The Node.js file system module allow you to work with the file system on your computer.

//To include the File System module, use the require() method:

var fs = require('fs');
//sets the file name to the command line argument
var filename = process.argv[2];
//file varibale used to read a file(aka a comandline argument), the err is incase an error occurs
file = fs.readFile(filename, function(err, data) {
//logs the results of the assyncd data to a file
  console.log(data.toString().split('\n').length - 1);
});
