//node file system import
var fs = require('fs');
// sets comand line arguments to a varibale for later use
var filename = process.argv[2];
//sets the commandline arguments for input
input = fs.readFileSync(filename);
//converts the file to a string for proccessing
contents = input.toString();
// spits on the line and makes a newline
console.log(contents.split('\n').length - 1);
