// requires the fs module
var fs = require('fs');
// requires a file for proccessing fot github it it just set to path for modualization
var path = require('path');
//checks for the extention
module.exports = function (dir, ext, callback) {
    ext = '.' + ext;
// if the data isnt founf it prints an error
    fs.readdir(dir, function (err, data) {
        if (err) return callback(err);
        // checks the data file extention if true it returns ture, if not returns false
        data = data.filter(function (file) {
            if (path.extname(file) === ext) {
                return true;
            } else {
                return false;
            }
        });
        
        callback(null, data);
    });
};
