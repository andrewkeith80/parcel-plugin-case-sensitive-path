const fs = require('fs');
const path = require('path');
const Packager = require("parcel-bundler/src/packagers/Packager");

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


class CaseSensitiveChecker extends Packager {
  addAsset(asset) {

    if (!fileExistsWithCaseSync(asset.name)) {
      throw new Error(`file ${asset.name} is not case sensitive`);
    }

    return asset;
  }
}

module.exports = CaseSensitiveChecker;