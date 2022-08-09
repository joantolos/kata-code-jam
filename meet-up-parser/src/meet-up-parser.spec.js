const meetUpParser = require('../src/meet-up-parser');
const chai = require('chai');
const expect = chai.expect;

describe('The Meet-up Parser is able to', () => {
  
  it('format a list of meet ups ready to print on HTML', () => {
    let input = require('./input.json');
    let expectedOutput = require('./expectedOutput.json');

    expect(meetUpParser.build(input)).to.deep.equal(expectedOutput);
  });

});