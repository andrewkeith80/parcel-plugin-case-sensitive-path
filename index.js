module.exports = function(bundler) {
    bundler.addPackager("js", require.resolve("./case-sensitive"));
    return bundler;
  }