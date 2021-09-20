const JSPackager = require("parcel-bundler/src/packagers/JSPackager");
const fileExistsWithCaseSync = require('./util/fileExistsWithCaseSync');

class CaseSensitiveChecker extends JSPackager {
  async addAsset(asset) {

    if (!fileExistsWithCaseSync(asset.name)) {
      throw new Error(`file ${asset.name} is not case sensitive`);
    }

    return await super.addAsset(asset);
  }
}

module.exports = CaseSensitiveChecker;