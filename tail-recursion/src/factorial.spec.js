const assert = require('assert');
const factorial = require('./factorial');

describe('Factorial', function () {

  it('should calculate five without recursion', function () {
    assert.equal(factorial.noRecursion(5), 120);
  })

  it('should calculate five with recursion', function () {
    assert.equal(factorial.recursion(5), 120);
  })

  it('should calculate five with tail recursion', function () {
    assert.equal(factorial.tailRecursion(5, 1), 120);
  })

})
