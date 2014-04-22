module.exports = function (grunt) {
    grunt.initConfig({
        clean: ['tmp/'],
        'module-graph': {
            basic: {
                src: ['tests/assets/module1.js', 'tests/assets/module2.js'],
                dest: 'tmp/graph.json'
            }
        }
    });

    // load this module's tasks
    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('test', [
        'clean',
        'module-graph'
    ]);
};
