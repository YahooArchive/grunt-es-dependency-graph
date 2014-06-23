grunt-es-dependency-graph
=========================

[![Build Status](https://travis-ci.org/yahoo/grunt-es-dependency-graph.svg?branch=master)](https://travis-ci.org/yahoo/grunt-es-dependency-graph)
[![Dependency Status](https://gemnasium.com/yahoo/grunt-es-dependency-graph.svg)](https://gemnasium.com/yahoo/grunt-es-dependency-graph)
[![NPM version](https://badge.fury.io/js/grunt-es-dependency-graph.svg)](http://badge.fury.io/js/grunt-es-dependency-graph)

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
npm install grunt-es-dependency-graph --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with
this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-es-dependency-graph');
```

The depGraph task
-----------------

Run this task with the `grunt depGraph` command. This will generate a JSON
file with all the dependencies of each module specified as a task `src`.

Task targets, files and options may be specified according to the grunt
[Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

Usage example
-------------

### Recommended

```js
grunt.initConfig({
  depGraph: {
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
  "module1.js": ["module2"]
}
```

### Including named imports/exports

Alternatively you can get more information from all you source files by using
the `includeBindings` option:

```js
grunt.initConfig({
  depGraph: {
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
  "module1.js": {
    "imports": {
      "module2": ["someImport", "anotherImport"]
    },
    "exports": ["somethingExported"]
  }
}
```

### Normalizing module names

By default module names are left as they were in the source code and top level keys are the paths to each module file. However, this is not desirable for many tools that depend on this information. The `moduleName` option allows you to normalize those names to whatever pattern works in your project. It receives two parameters: the current path and the path to the parent module in the case of an import. Example:

```js
grunt.initConfig({
  depGraph: {
    production: {
      options: {
        includeBindings: true,
        moduleName: function (importPath, modulePath) {
          return path.join(path.dirname(modulePath), importPath);
        }
      },
      src: ['src/*.js'],
      dest: 'dist/dependencies.json'
    }
  }
});
```

License
-------

This software is free to use under the Yahoo Inc. BSD license.
See the [LICENSE file][] for license text and copyright information.

Contribute
----------

See the [CONTRIBUTING file][] for info.


[CONTRIBUTING file]: https://github.com/yahoo/grunt-es-dependency-graph/blob/master/CONTRIBUTING.md
[LICENSE file]: https://github.com/yahoo/grunt-es-dependency-graph/blob/master/LICENSE.md
