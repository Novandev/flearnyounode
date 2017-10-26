// sets the rwuirement for the libray file
var lslib = require('./lslib');
// sets the file name for the variable
var dirname = process.argv[2];
//sets the extension name for the variab;e
var ext = process.argv[3];
// sets up a forloop that will print an error message in case it failes while being able to proccess more information. the parameter files is used as a stand in for the loop
lslib(dirname, ext, function(err, files) {
  //loops through the number of files availible and prints thiernames in accordance
  for (i = 0; i < files.length; i++) {
    //logs the files
    console.log(files[i]);
  }
});
