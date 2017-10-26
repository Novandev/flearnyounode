//node file system import
var fs = require('fs')
//sets the reuirement of a location to get files
var path = require('path')
//grabs a directory listing of the Node.js script’s parent directory (../) using the asynchronous fs.readdir() via the command line inside of a call back
fs.readdir(process.argv[2], function (err, list) {
  // for each of the files write a . then the next file
  list.forEach(function (file) {
    // if the path has a "." then log it to the console, if not skip it
    if (path.extname(file) === '.' + process.argv[3])
    // log the files to the console
      console.log(file)
  })
})
