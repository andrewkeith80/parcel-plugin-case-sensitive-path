const fs = require('fs');
const path = require('path');
/**
  Got this function stackoverflow because I am too lazy to write proper code .. LOL 
  https://stackoverflow.com/questions/27367261/check-if-file-exists-case-sensitive
 */
function fileExistsWithCaseSync(filepath) {
    var dir = path.dirname(filepath)
    if (dir === path.dirname(dir)) {
        return true
    }
    var filenames = fs.readdirSync(dir)
    if (filenames.indexOf(path.basename(filepath)) === -1) {
        return false
    }
    return fileExistsWithCaseSync(dir)
}

module.exports = fileExistsWithCaseSync;