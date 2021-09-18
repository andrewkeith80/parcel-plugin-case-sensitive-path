module.exports = function(bundler) {
    
    ["js","jsx","ts","tsx","sccs","css"].forEach(f => {
      bundler.addPackager(f, require.resolve("./case-sensitive"));
    });

    return bundler;
  }