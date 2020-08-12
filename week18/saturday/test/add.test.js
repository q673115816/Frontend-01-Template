var assert = require('assert');
var add = require('../src/add')

describe('add', function () {
    it('should return 3', function () {
        assert.equal(add(1, 2), 3);
    });
});
