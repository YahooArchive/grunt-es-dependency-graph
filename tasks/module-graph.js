/*
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
https://github.com/juandopazo/grunt-module-graph/blob/master/LICENSE.md
*/
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
      var options = this.options({
        includeBindings: false
      });
      this.files.forEach(function (file) {
        var sources, result;

        sources = file.src.filter(function (filepath) {
          return grunt.file.exists(filepath);
        });

        result = JSON.stringify(hash(sources.map(function (filepath) {
          return path.basename(filepath, '.js');
        }), sources.map(function (filepath) {
          return graph(grunt.file.read(filepath), {
            includeBindings: options.includeBindings
          });
        })));

        toArray(file.dest).forEach(function (filepath) {
          grunt.file.write(filepath, result);
        });
      });
    });
};
