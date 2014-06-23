var path = require('path');

module.exports = function (grunt) {
    grunt.initConfig({
        clean: ['tests/compare/actual/'],
        depGraph: {
            simple: {
                src: ['tests/compare/sources/**/*.js'],
                dest: 'tests/compare/actual/graph-simple.json'
            },
            full: {
                options: {
                    includeBindings: true
                },
                src: ['tests/compare/sources/**/*.js'],
                dest: 'tests/compare/actual/graph-full.json'
            },
            normalized: {
                options: {
                    includeBindings: true,
                    moduleName: function (name) {
                        return path.basename(name, '.js');
                    }
                },
                src: ['tests/compare/sources/**/*.js'],
                dest: 'tests/compare/actual/graph-normalized.json'
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['tests/*.js']
            },
            sd: {
                options: {
                    reporter: 'xunit'
                },
                src: ['tests/*.js']
            }
        }
    });

    // load this module's tasks
    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('build', ['clean', 'depGraph']);
    grunt.registerTask('test', ['build', 'mochaTest']);
    grunt.registerTask('default', ['build']);
};
