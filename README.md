grunt-contrib-module-graph
==========================

Grunt task to generate a JSON file with the dependency tree in ES6 module files.

Getting Started
---------------
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains
how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

```shell
npm install grunt-contrib-module-graph --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with
this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contrib-module-graph');
```

The module graph task
---------------------

Run this task with the `grunt module-graph` command. This will generate a JSON
file with all the dependencies of each module specified as a task `src`.

Task targets, files and options may be specified according to the grunt
[Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

Usage example
-------------

### Recommended

```js
grunt.initConfig({
  'module-graph': {
    production: {
      src: ['src/*.js'],
      dest: 'dist/dependencies.json'
    }
  }
});
```

Running this task will generate a file that looks like this:

```json
{
    "module1": {
        "requires": ["module2"]
    }
}
```

License
-------

Yahoo BSD.
