var graph = require('module-graph'),
    path  = require('path');

function toArray(arr) {
  if (!Array.isArray(arr)) {
    arr = [arr];
  }
  return arr;
}

function hash(a, b) {
  var result = {}, i, length = a.length;

  for (i = 0; i < length; i++) {
    result[a[i]] = b[i];
  }

  return result;
}

module.exports = function (grunt) {
  grunt.registerMultiTask('module-graph', 'Generate a dependency graph',
    function () {
      this.files.forEach(function (file) {
        var sources, result;

        sources = file.src.filter(function (filepath) {
          return grunt.file.exists(filepath);
        });

        result = JSON.stringify(hash(sources.map(function (filepath) {
          return path.basename(filepath, '.js');
        }), sources.map(function (filepath) {
          return graph(grunt.file.read(filepath));
        })));

        toArray(file.dest).forEach(function (filepath) {
          grunt.file.write(filepath, result);
        });
      });
    });
};
