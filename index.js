module.exports = function(bundler) {
    
  bundler.addPackager("js", require.resolve("./case-sensitive-js"));
  bundler.addPackager("css", require.resolve("./case-sensitive-css"));

    return bundler;
  }