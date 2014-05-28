var expect = require('chai').expect,
    fs     = require('fs'),
    path   = require('path');

describe('Grunt task', function () {
    describe('with includeBindings set to `false`', function () {
        it('should create the correct JSON file', function () {
            var result = JSON.parse(
                fs.readFileSync(path.join(__dirname, '../tmp/graph-simple.json'), 'utf8'));

            expect(result).to.deep.equal({
                module1: ['bar'],
                module2: ['module1']
            });
        });
    });
    describe('with includeBindings set to `true`', function () {
        it('should create the correct JSON file', function () {
            var result = JSON.parse(
                fs.readFileSync(path.join(__dirname, '../tmp/graph-full.json'), 'utf8'));

            expect(result).to.deep.equal({
                module1: {
                    imports: {
                        bar: ['default']
                    },
                    exports: ['foo']
                },
                module2: {
                    imports: {
                        module1: ['default']
                    },
                    exports: []
                }
            });
        });
    });
});
