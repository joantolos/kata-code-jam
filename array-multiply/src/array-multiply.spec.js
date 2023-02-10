const arrayMultiply = require('./array-multiply');
const expect =require('chai').expect;
describe('Array multiply', function () {

  it('should comply with example one', function () {
    expect(arrayMultiply.resolve( [1, 2, 3, 4, 5])).deep.to.equal([120, 60, 40, 30, 24]);
  })

  it('should comply with example two', function () {
    expect(arrayMultiply.resolve( [3, 2, 1])).deep.to.equal( [2, 3, 6]);
  })

})
