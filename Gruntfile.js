module.exports = function (grunt) {
    grunt.initConfig({
        clean: ['tmp/'],
        'module-graph': {
            basic: {
                src: ['tests/assets/*.js'],
                dest: 'tmp/graph.json'
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
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
