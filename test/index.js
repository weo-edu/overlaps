var expect = require('chai').expect;
var overlaps = require('../');

describe('overlaps', function() {
  it('should work', function() {
    expect(overlaps(['a', 'b'], ['c', 'd'])).to.be.false;
    expect(overlaps(['a', 'b'], ['a', 'b', 'c', 'd'])).to.be.true;
  });

  it('should use comparators', function() {
    function cmp(a, b) {
      return a == b;
    }

    expect(overlaps(['1'], [1])).to.be.false;
    expect(overlaps(['1'], [1], cmp)).to.be.true;
  });
});