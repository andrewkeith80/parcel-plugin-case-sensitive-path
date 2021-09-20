const CSSPackager = require("parcel-bundler/src/packagers/CSSPackager");
const fileExistsWithCaseSync = require('./util/fileExistsWithCaseSync');

class CaseSensitiveChecker extends CSSPackager {
  async addAsset(asset) {

    if (!fileExistsWithCaseSync(asset.name)) {
      throw new Error(`file ${asset.name} is not case sensitive`);
    }

    return await super.addAsset(asset);
  }
}

module.exports = CaseSensitiveChecker;