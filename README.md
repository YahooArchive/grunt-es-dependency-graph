grunt-module-graph
==================

[![Build Status](https://travis-ci.org/juandopazo/grunt-module-graph.svg?branch=master)](https://travis-ci.org/juandopazo/grunt-module-graph)
[![Dependency Status](https://gemnasium.com/juandopazo/grunt-module-graph.svg)](https://gemnasium.com/juandopazo/grunt-module-graph)
[![NPM version](https://badge.fury.io/js/grunt-module-graph.svg)](http://badge.fury.io/js/grunt-module-graph)

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
npm install grunt-module-graph --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with
this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-module-graph');
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
  "module1": ["module2"]
}
```

### Including named imports/exports

Alternatively you can get more information from all you source files by using
the `includeBindings` option:

```js
grunt.initConfig({
  'module-graph': {
    production: {
      options: {
        includeBindings: true
      },
      src: ['src/*.js'],
      dest: 'dist/dependencies.json'
    }
  }
});
```

Chosing this option will generate an output file similar to:

```json
{
  "module1": {
    "imports": {
      "module2": ["someImport", "anotherImport"]
    },
    "exports": ["somethingExported"]
  }
}
```

License
-------

This software is free to use under the Yahoo Inc. BSD license.
See the [LICENSE file][] for license text and copyright information.

Contribute
----------

See the [CONTRIBUTING file][] for info.


[CONTRIBUTING file]: https://github.com/juandopazo/grunt-module-graph/blob/master/CONTRIBUTING.md
[LICENSE file]: https://github.com/juandopazo/grunt-module-graph/blob/master/LICENSE.md
