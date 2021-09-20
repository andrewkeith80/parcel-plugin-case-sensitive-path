module.exports = function(bundler) {
    
    ["js","jsx"].forEach(f => {
      bundler.addPackager(f, require.resolve("./case-sensitive"));
    });

    return bundler;
  }