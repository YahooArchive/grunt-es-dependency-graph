module.exports = function (grunt) {
    grunt.initConfig({
        clean: ['tests/compare/actual/'],
        'module-graph': {
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
                    includeBindings: true
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

    grunt.registerTask('test', [
        'clean',
        'module-graph',
        'mochaTest'
    ]);
};
