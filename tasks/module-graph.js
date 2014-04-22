var graph = require('module-graph'),
    path  = require('path');

function toArray(arr) {
  if (!Array.isArray(arr)) {
    arr = [arr];
  }
  return arr;
}

module.exports = function (grunt) {
  grunt.registerMultiTask('module-graph', 'Generate a dependency graph',
    function () {
      this.files.forEach(function (file) {
        var result = JSON.stringify(file.src.filter(function (filepath) {
          // Remove nonexistent files (it's up to you to filter or warn here).
          if (!grunt.file.exists(filepath)) {
            grunt.log.warn('Source file "' + filepath + '" not found.');
            return false;
          } else {
            return true;
          }
        }).reduce(function (result, filepath) {
          var filename = path.basename(filepath, '.js');
          result[filename] = graph.parse(grunt.file.read(filepath));
          return result;
        }, {}));

        toArray(file.dest).forEach(function (filepath) {
          grunt.file.write(filepath, result);
        });
      });
    });
};
