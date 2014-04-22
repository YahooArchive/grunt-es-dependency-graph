var expect = require('chai').expect,
    fs     = require('fs'),
    path   = require('path');

describe('Grunt task', function () {
    it('should work', function () {
        console.log(path.join(__dirname, 'tmp/graph.json'));
        var result = fs.readFileSync(path.join(__dirname, '../tmp/graph.json'), 'utf8');
        result = JSON.parse(result);
        expect(result).to.deep.equal({
            module1: {
                requires: ['bar']
            },
            module2: {
                requires: ['module1']
            }
        });
    });
});
