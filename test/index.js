var expect = require('chai')
var commonchecks = require('..')

describe('commonchecks', function() {
  it('should say hello', function(done) {
    expect(commonchecks()).to.equal('Hello, world');
    done();
  });
});
