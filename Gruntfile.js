module.exports = function (grunt) {
    grunt.initConfig({
        clean: ['tmp/'],
        'module-graph': {
            simple: {
                src: ['tests/assets/*.js'],
                dest: 'tmp/graph-simple.json'
            },
            full: {
                options: {
                    includeBindings: true
                },
                src: ['tests/assets/*.js'],
                dest: 'tmp/graph-full.json'
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
