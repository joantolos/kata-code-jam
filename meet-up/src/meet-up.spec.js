const assert = require('assert');
const meetUp = require('./meet-up');

describe('Meet up parse', function () {

  const input = {"input":[{"edition":"4th","name":"JBCN Conference","startDate":"2018-06-11","endDate":"2018-06-13","location":[{"city":"Barcelona","country":"Spain"}]},{"edition":"3rd","name":"DevTernity","startDate":"2018-11-30","endDate":"2018-12-01","location":[{"city":"Riga","country":"Latvia"}]},{"edition":"1st","name":"I T.A.K.E Unconference","startDate":"2016-05-19","endDate":"2016-05-20","location":[{"city":"Bucharest","country":"Romania"},{"city":"Maramures","country":"Romania"}]},{"edition":"2nd","name":"Product Owner Rule Book","startDate":"2016-04-11","endDate":"2016-04-13","location":[{"city":"Paris","country":"France"},{"city":"Madrid","country":"Spain"}]},{"name":"Upfront Summit","startDate":"2018-02-01","location":[{"city":"Los Angeles","state":"California","country":"United States"}]},{"name":"IBM Think","startDate":"2018-03-19","location":[{"state":"Nevada","country":"United States"}]}]};

  it('should parse title', function () {
    assert.equal(meetUp.parse(input)[0].split(' · ')[0], '4th JBCN Conference');
    assert.equal(meetUp.parse(input)[4].split(' · ')[0], 'Upfront Summit');
  })

  it('should parse meet up date', function () {
    assert.equal(meetUp.parse(input)[0].split(' ·')[1], ' 2018-06-11 / 2018-06-13');
    assert.equal(meetUp.parse(input)[4].split(' ·')[1], ' 2018-02-01');
  })

  it('should parse single location', function () {
    assert.equal(meetUp.parse(input)[0].split(' ·')[2], ' Barcelona, Spain');
    assert.equal(meetUp.parse(input)[1].split(' ·')[2], ' Riga, Latvia');
    assert.equal(meetUp.parse(input)[4].split(' ·')[2], ' Los Angeles, California. United States');
    assert.equal(meetUp.parse(input)[5].split(' ·')[2], ' Nevada, United States');
  })

  it('should parse more than one location', function () {
    assert.equal(meetUp.parse(input)[3].split(' ·')[2], ' Paris, France | Madrid, Spain');
  })

})
