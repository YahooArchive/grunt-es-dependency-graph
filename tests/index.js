/*
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
https://github.com/juandopazo/grunt-module-graph/blob/master/LICENSE.md
*/
var expect = require('chai').expect,
    fs     = require('fs'),
    path   = require('path');

function read(file) {
    return JSON.parse(fs.readFileSync(path.join(__dirname, 'compare/', file), 'utf8'));
}

describe('Grunt task', function () {
    describe('generates expected output', function () {
        specify('with includeBindings set to `false`', function () {
            expect(read('actual/graph-simple.json'))
                .to.deep.equal(read('expected/graph-simple.json'));
        });
        specify('with includeBindings set to `true`', function () {
            expect(read('actual/graph-full.json'))
                .to.deep.equal(read('expected/graph-full.json'));
        });
        specify('with includeBindings set to `true` and normalized', function () {
            expect(read('actual/graph-normalized.json'))
                .to.deep.equal(read('expected/graph-normalized.json'));
        });
    });
});
