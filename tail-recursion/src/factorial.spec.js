const assert = require('assert');
const factorial = require('./factorial');

describe('Factorial', function () {

  const input = {"input":[{"edition":"4th","name":"JBCN Conference","startDate":"2018-06-11","endDate":"2018-06-13","location":[{"city":"Barcelona","country":"Spain"}]},{"edition":"3rd","name":"DevTernity","startDate":"2018-11-30","endDate":"2018-12-01","location":[{"city":"Riga","country":"Latvia"}]},{"edition":"1st","name":"I T.A.K.E Unconference","startDate":"2016-05-19","endDate":"2016-05-20","location":[{"city":"Bucharest","country":"Romania"},{"city":"Maramures","country":"Romania"}]},{"edition":"2nd","name":"Product Owner Rule Book","startDate":"2016-04-11","endDate":"2016-04-13","location":[{"city":"Paris","country":"France"},{"city":"Madrid","country":"Spain"}]},{"name":"Upfront Summit","startDate":"2018-02-01","location":[{"city":"Los Angeles","state":"California","country":"United States"}]},{"name":"IBM Think","startDate":"2018-03-19","location":[{"state":"Nevada","country":"United States"}]}]};

  it('should calculate factorial of five without recursion', function () {
    assert.equal(factorial.noRecursion(5), 120);
  })

  it('should calculate factorial of five with recursion', function () {
    assert.equal(factorial.recursion(5), 120);
  })

  it('should calculate factorial of five with tail recursion', function () {
    assert.equal(factorial.tailRecursion(5), 120);
  })

})
