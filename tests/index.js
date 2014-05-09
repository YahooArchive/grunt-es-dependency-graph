var expect = require('chai').expect,
    fs     = require('fs'),
    path   = require('path');

describe('Grunt task', function () {
    it('should work', function () {
        var result = JSON.parse(
            fs.readFileSync(path.join(__dirname, '../tmp/graph.json'),
                {encoding: 'utf8'}));
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
