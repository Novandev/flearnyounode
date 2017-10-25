var fs = require('fs');
// reads this as a file name
var filename = process.argv[2];
//
file = fs.readFileSync(filename);
//converts the file to a string for proccessing
contents = file.toString();
// spits on the line and makes a newline
console.log(contents.split('\n').length - 1);
