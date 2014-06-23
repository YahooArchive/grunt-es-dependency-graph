/*
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
https://github.com/juandopazo/grunt-module-graph/blob/master/LICENSE.md
*/
var depGraph = require('es-dependency-graph'),
    path     = require('path');

module.exports = function (grunt) {
    var exists = function (file) {
        return grunt.file.exists(file);
    };

    grunt.registerMultiTask('depGraph', 'Generate a dependency graph', function () {
        var options = this.options({
                includeBindings: false
            }),
            normalize = options.moduleName;

        this.files.forEach(function (file) {
            var result = {};

            file.src
                .filter(exists)
                .forEach(function (filepath) {
                    var currDir = path.dirname(filepath),
                        deps    = depGraph(grunt.file.read(filepath), options),
                        imports;

                    if (normalize) {
                        if (options.includeBindings) {
                            imports = deps.imports;
                            deps.imports = {};
                            Object.keys(imports).forEach(function (modName) {
                                deps.imports[normalize(modName, currDir)] =
                                    imports[modName];
                            });
                        }
                        filepath = normalize(filepath, currDir);
                    }

                    result[filepath] = deps;
                });

            result = JSON.stringify(result);

            grunt.file.write(file.dest, result);
        });
    });
};
